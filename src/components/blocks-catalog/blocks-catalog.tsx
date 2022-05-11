import { Collapse } from 'antd'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ReactFlowProvider } from 'react-flow-renderer'

import { PipelineBlock } from '../index'
import { BlocksContext, BlocksContextType } from '../../common/context/blocks-context'
import { pluckIds } from '../../common/utils'

const { Panel } = Collapse

const BlocksCatalog = () => {
    const { searchString, filteredBlocks, blockCategories, blocksByCategory } = useContext(
        BlocksContext
    ) as BlocksContextType

    const categoriesIds = pluckIds(blockCategories)
    const [activeKey, setActiveKey] = useState(categoriesIds)

    const handleCollapseChange = useCallback(
        (keys: string[] | string) => {
            if (searchString !== '') return

            setActiveKey(keys as string[])
        },
        [searchString]
    )

    useEffect(() => {
        if (searchString === '') {
            setActiveKey(categoriesIds)
            return
        }
        const newActiveKey = categoriesIds.filter((id) => filteredBlocks.some(({ categoryId }) => categoryId === id))
        setActiveKey(newActiveKey)
    }, [filteredBlocks])

    return (
        <ReactFlowProvider>
            <Collapse activeKey={activeKey} onChange={handleCollapseChange}>
                {blockCategories.map((category) => {
                    return (
                        <Panel header={category.name} key={category.id}>
                            {blocksByCategory[category.id]
                                .filter((item) => pluckIds(filteredBlocks).includes(item.id))
                                .map((block) => (
                                    <div className="block-list-item" key={block.id}>
                                        <PipelineBlock block={block} isPreview />
                                    </div>
                                ))}
                        </Panel>
                    )
                })}
            </Collapse>
        </ReactFlowProvider>
    )
}

export default BlocksCatalog
