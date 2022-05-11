export type BlockType = 'input' | 'output' | 'default'
export type PortType = 'input' | 'output'

export type BlockCategory = {
    id: string
    name: string
    color: string
}

export type Port = {
    id: string
    type: PortType
    name?: string
}

export type Block = {
    id: string
    categoryId: BlockCategory['id']
    color: BlockCategory['color']
    blockType: BlockType
    name: string
    icon: string
    ports: Port[]
}

export type BlocksByCategoryId = {
    [id: string]: Block[]
}

export type BlockFormValues = {
    name: string
}
