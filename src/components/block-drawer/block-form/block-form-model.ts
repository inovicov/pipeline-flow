import { Block } from '../../../common/types'

export const BlockFormModel = (block?: Block) => {
    if (!block) {
        return {
            name: '',
        }
    }

    const { name } = block
    return {
        name,
    }
}
