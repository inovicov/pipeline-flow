import { Form } from 'antd'
import { useCallback, useContext, useMemo } from 'react'
import { Node } from 'react-flow-renderer'

import { BlockFormModel } from './block-form-model'
import { Block } from '../../../common/types'
import { DrawerContext, DrawerContextType } from '../../../common/context/drawer-context'
import { BlocksContext, BlocksContextType } from '../../../common/context/blocks-context'

export const useBlockForm = (activeBlock?: Block) => {
    const { updateNode, resetActiveBlock } = useContext(DrawerContext) as DrawerContextType
    const { setNodes } = useContext(BlocksContext) as BlocksContextType

    const [form] = Form.useForm()

    const initialValues = useMemo(() => BlockFormModel(activeBlock), [activeBlock])

    const handleSubmit = useCallback(() => {
        console.log(form.getFieldsValue())
        form.validateFields().then((values) => {
            const updatedNode = updateNode(values)
            if (updatedNode) {
                setNodes((nodes: Node[]) =>
                    nodes.map((node) => {
                        if (node.id === updatedNode.id) {
                            return updatedNode
                        }
                        return node
                    })
                )
                form.resetFields()
                resetActiveBlock()
            }
        })
    }, [form, setNodes, updateNode, resetActiveBlock])

    return {
        form,
        onSubmit: handleSubmit,
        initialValues,
    }
}
