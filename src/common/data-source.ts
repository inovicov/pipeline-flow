import { Block, BlockCategory } from './types'

import { uniqueId } from './utils'

export const blockCategories: BlockCategory[] = [
    {
        id: uniqueId(),
        name: 'Input',
        color: '#f65555',
    },
    {
        id: uniqueId(),
        name: 'Function',
        color: '#ffc53d',
    },
    {
        id: uniqueId(),
        name: 'Nest',
        color: '#40a9ff',
    },
]

export const blocks: Block[] = [
    {
        id: uniqueId(),
        categoryId: blockCategories[0].id,
        color: blockCategories[0].color,
        blockType: 'output',
        name: 'input',
        icon: 'FunctionOutlined',
        ports: [
            {
                id: uniqueId(),
                type: 'output',
            },
        ],
    },
    {
        id: uniqueId(),
        categoryId: blockCategories[0].id,
        color: blockCategories[0].color,
        blockType: 'output',
        name: 'catch',
        icon: 'FunctionOutlined',
        ports: [
            {
                id: uniqueId(),
                type: 'output',
            },
        ],
    },
    {
        id: uniqueId(),
        categoryId: blockCategories[1].id,
        color: blockCategories[1].color,
        blockType: 'output',
        name: 'function',
        icon: 'FunctionOutlined',
        ports: [
            {
                id: uniqueId(),
                type: 'output',
            },
        ],
    },
    {
        id: uniqueId(),
        categoryId: blockCategories[1].id,
        color: blockCategories[1].color,
        blockType: 'output',
        name: 'template',
        icon: 'FunctionOutlined',
        ports: [
            {
                id: uniqueId(),
                type: 'output',
            },
        ],
    },
    {
        id: uniqueId(),
        categoryId: blockCategories[2].id,
        color: blockCategories[2].color,
        blockType: 'output',
        name: 'nest status',
        icon: 'HomeOutlined',
        ports: [
            {
                id: uniqueId(),
                type: 'output',
            },
        ],
    },
    {
        id: uniqueId(),
        categoryId: blockCategories[2].id,
        color: blockCategories[2].color,
        blockType: 'default',
        name: 'nest request',
        icon: 'HomeOutlined',
        ports: [
            {
                id: uniqueId(),
                type: 'input',
            },
            {
                id: uniqueId(),
                type: 'output',
            },
        ],
    },
    {
        id: uniqueId(),
        categoryId: blockCategories[2].id,
        color: blockCategories[2].color,
        blockType: 'default',
        name: 'nest request',
        icon: 'HomeOutlined',
        ports: [
            {
                id: uniqueId(),
                type: 'input',
            },
            {
                id: uniqueId(),
                type: 'output',
            },
        ],
    },
    {
        id: uniqueId(),
        categoryId: blockCategories[2].id,
        color: blockCategories[2].color,
        blockType: 'default',
        name: 'nest request',
        icon: 'HomeOutlined',
        ports: [
            {
                id: uniqueId(),
                type: 'input',
            },
            {
                id: uniqueId(),
                type: 'output',
            },
        ],
    },
    {
        id: uniqueId(),
        categoryId: blockCategories[2].id,
        color: blockCategories[2].color,
        blockType: 'default',
        name: 'nest request',
        icon: 'HomeOutlined',
        ports: [
            {
                id: uniqueId(),
                type: 'input',
            },
            {
                id: uniqueId(),
                type: 'output',
            },
        ],
    },
    {
        id: uniqueId(),
        categoryId: blockCategories[2].id,
        color: blockCategories[2].color,
        blockType: 'default',
        name: 'nest request',
        icon: 'HomeOutlined',
        ports: [
            {
                id: uniqueId(),
                type: 'input',
            },
            {
                id: uniqueId(),
                type: 'output',
            },
        ],
    },
]
