import { Input, Form } from 'antd'
import React, { ChangeEvent, useCallback, useContext } from 'react'
import { BlocksContext, BlocksContextType } from '../../common/context/blocks-context'

const BlocksSearch = () => {
    const { searchString, setSearchString } = useContext(BlocksContext) as BlocksContextType

    const handleSearch = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target

            setSearchString(value)
        },
        [setSearchString]
    )

    return (
        <Form.Item>
            <Input allowClear placeholder="Filter nodes" value={searchString} onChange={handleSearch} />
        </Form.Item>
    )
}

export default BlocksSearch
