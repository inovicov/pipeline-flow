import React, { DragEvent, MouseEvent, useCallback, useContext, useRef, useState } from 'react'
import ReactFlow, {
    addEdge,
    MiniMap,
    Controls,
    Node,
    Edge,
    NodeChange,
    EdgeChange,
    Connection,
    applyNodeChanges,
    applyEdgeChanges,
} from 'react-flow-renderer'

import CustomNodeType from './custom-node-type'
import { uniqueId } from '../../common/utils'
import { ReactFlowInstance } from 'react-flow-renderer/dist/esm/types/instance'
import { Block } from '../../common/types'
import { DrawerContext, DrawerContextType } from '../../common/context/drawer-context'
import { BlocksContext, BlocksContextType } from '../../common/context/blocks-context'

type FlowProps = {
    edges?: Edge[]
    onNodesChange?: (changes: NodeChange[]) => void
    onEdgesChange?: (changes: EdgeChange[]) => void
    onConnect?: (connection: Connection) => void
}

const nodeTypes = {
    customNodeType: CustomNodeType,
}

const Flow = ({ edges: initialEdges = [] }: FlowProps) => {
    const { setActiveNode } = useContext(DrawerContext) as DrawerContextType
    const { nodes, setNodes } = useContext(BlocksContext) as BlocksContextType

    const reactFlowWrapper = useRef<HTMLDivElement | null>(null)
    const [edges, setEdges] = useState<Edge[]>(initialEdges)
    const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null)

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nds: Node[]) => applyNodeChanges(changes, nds)),
        [setNodes]
    )
    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    )

    const onConnect = useCallback((connection: Connection) => setEdges((eds) => addEdge(connection, eds)), [setEdges])

    const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move'
    }, [])

    const onDrop = useCallback(
        (event: DragEvent<HTMLDivElement>) => {
            event.preventDefault()

            if (!reactFlowWrapper.current || !reactFlowInstance) return

            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()
            const block = JSON.parse(event.dataTransfer.getData('application/reactflow')) as Block

            // check if the dropped element is valid
            if (typeof block === 'undefined' || !block) {
                return
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            })

            const newNode = {
                id: uniqueId(),
                type: 'customNodeType',
                position,
                data: {
                    block,
                },
            }

            setNodes((nds: Node[]) => nds.concat(newNode))
        },
        [reactFlowInstance]
    )

    const handleNodeDoubleClick = useCallback(
        (event: MouseEvent, node: Node) => {
            setActiveNode(node)
        },
        [setActiveNode]
    )

    return (
        <div className="react-flow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onInit={setReactFlowInstance}
                onNodeDoubleClick={handleNodeDoubleClick}
            >
                <MiniMap />
                <Controls />
            </ReactFlow>
        </div>
    )
}

export default Flow
