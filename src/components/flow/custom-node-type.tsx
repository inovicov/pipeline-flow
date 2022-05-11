import React, { memo } from 'react'
import { PipelineBlock } from '../index'

const CustomNodeType = ({ data }: any) => {
    const { block } = data

    return (
        <>
            <div className="custom-node-type">
                <PipelineBlock block={block} />
            </div>
        </>
    )
}

export default memo(CustomNodeType)
