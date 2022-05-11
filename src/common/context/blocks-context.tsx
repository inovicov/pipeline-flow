import { createContext, ReactNode, useMemo, useState } from 'react'
import { Node } from 'react-flow-renderer'

import { Block, BlockCategory, BlocksByCategoryId } from '../types'
import { blocks, blockCategories } from '../data-source'

export type BlocksContextType = {
    searchString: string
    setSearchString: (searchString: string) => void
    filteredBlocks: Block[]
    blockCategories: BlockCategory[]
    blocksByCategory: BlocksByCategoryId
    nodes: Node[]
    // Need to type this properly
    setNodes: any
}

export const BlocksContext = createContext<BlocksContextType | null>(null)

type BlocksContextProviderProps = {
    children: ReactNode
}

export const BlocksContextProvider = ({ children }: BlocksContextProviderProps) => {
    const [searchString, setSearchString] = useState('')
    const [nodes, setNodes] = useState<Node[]>([])

    const filteredBlocks = useMemo(() => {
        return blocks.filter(({ name }) => name.toLowerCase().indexOf(searchString.toLowerCase()) >= 0)
    }, [searchString])

    const blocksByCategory = useMemo(() => {
        return blockCategories.reduce((acc, category) => {
            const items = blocks.filter(({ categoryId }) => categoryId === category.id)
            acc[category.id] = items
            return acc
        }, {} as BlocksByCategoryId)
    }, [])

    return (
        <BlocksContext.Provider
            value={{
                searchString,
                filteredBlocks,
                setSearchString,
                blockCategories,
                blocksByCategory,
                nodes,
                setNodes,
            }}
        >
            {children}
        </BlocksContext.Provider>
    )
}
