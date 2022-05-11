import { Drawer, Space, Button } from 'antd'
import React, { useContext } from 'react'

import { DrawerContext, DrawerContextType } from '../../common/context/drawer-context'

import BlockForm from './block-form/block-form'
import { useBlockForm } from './block-form/use-block-form'

const BlockDrawer = () => {
    const { isOpen, resetActiveBlock, activeBlock } = useContext(DrawerContext) as DrawerContextType

    const { form, onSubmit, initialValues } = useBlockForm(activeBlock)

    return (
        <Drawer
            visible={isOpen}
            onClose={resetActiveBlock}
            forceRender
            extra={
                <Space>
                    <Button onClick={resetActiveBlock}>Cancel</Button>
                    <Button onClick={onSubmit} type="primary">
                        Submit
                    </Button>
                </Space>
            }
        >
            {activeBlock && <BlockForm initialValues={initialValues} form={form} />}
        </Drawer>
    )
}

export default BlockDrawer
