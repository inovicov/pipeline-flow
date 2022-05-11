import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { Node } from 'react-flow-renderer'

import { Block, BlockFormValues } from '../types'

export type DrawerContextType = {
    isOpen: boolean
    activeBlock?: Block
    setActiveNode: (node: Node) => void
    resetActiveBlock: () => void
    updateNode: (block: BlockFormValues) => Node | undefined
}

export const DrawerContext = createContext<DrawerContextType | null>(null)

type DrawerContextProviderProps = {
    children: ReactNode
}

export const DrawerContextProvider = ({ children }: DrawerContextProviderProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeBlock, setActiveNode] = useState<Node | undefined>(undefined)

    useEffect(() => {
        setIsOpen(!!activeBlock)
    }, [activeBlock])

    const updateNode = useCallback(
        (block: BlockFormValues) => {
            if (!activeBlock) return undefined
            return {
                ...activeBlock,
                data: {
                    ...activeBlock.data,
                    block: {
                        ...activeBlock.data.block,
                        ...block,
                    },
                },
            }
        },
        [activeBlock]
    )

    const resetActiveBlock = useCallback(() => {
        setActiveNode(undefined)
    }, [])

    const value = useMemo(
        () => ({
            isOpen,
            activeBlock: activeBlock?.data?.block,
            setActiveNode,
            resetActiveBlock,
            updateNode,
        }),
        [isOpen, activeBlock, updateNode]
    )

    return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
}
