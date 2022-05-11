import { HomeOutlined, FunctionOutlined } from '@ant-design/icons'
import React, { DragEvent, useCallback, useMemo } from 'react'
import { Handle, Position } from 'react-flow-renderer'

import { Block } from '../../common/types'

type PipelineBlockProps = {
    block: Block
    isPreview?: boolean
}

// Not the best way to do it
const ICONS_MAP: any = {
    HomeOutlined: <HomeOutlined />,
    FunctionOutlined: <FunctionOutlined />,
}

const PipelineBlock = ({ block, isPreview }: PipelineBlockProps) => {
    const { color, blockType, ports } = block

    const blockStyle = {
        backgroundColor: color,
        cursor: isPreview ? 'move' : 'inherit',
    }

    const handleDragStart = useCallback(
        (event: DragEvent<HTMLElement>) => {
            if (isPreview) {
                event.dataTransfer.setData('application/reactflow', JSON.stringify(block))
                event.dataTransfer.effectAllowed = 'move'
            }
        },
        [block, isPreview]
    )

    const outputHandles = useMemo(() => {
        return (
            <>
                {ports.map((port) => {
                    const { type, id: portId } = port

                    const position = type === 'input' ? Position.Left : Position.Right
                    const handleType = type === 'input' ? 'target' : 'source'

                    return (
                        <Handle
                            key={portId}
                            isConnectable={!isPreview}
                            type={handleType}
                            position={position}
                            className="pipeline-block-handle"
                        />
                    )
                })}
            </>
        )
    }, [blockType, isPreview])

    return (
        <div className="pipeline-block" style={blockStyle} onDragStart={handleDragStart} draggable={isPreview}>
            {outputHandles}
            <div className="pipeline-block-icon-wrapper">{ICONS_MAP[block.icon]}</div>
            {block.name}
        </div>
    )
}

export default PipelineBlock
