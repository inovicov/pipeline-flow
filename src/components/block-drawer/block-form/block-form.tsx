import { Form, FormInstance, Input } from 'antd'
import React from 'react'

import { BlockFormValues } from '../../../common/types'

type BlockFormProps = {
    initialValues: BlockFormValues
    form: FormInstance
}

const BlockForm = ({ initialValues, form }: BlockFormProps) => {
    return (
        <Form initialValues={initialValues} form={form} autoComplete="off">
            <Form.Item name="name" label="Name">
                <Input />
            </Form.Item>
        </Form>
    )
}

export default BlockForm
