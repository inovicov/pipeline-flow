export const uniqueId = () => Math.random().toString(36).substr(2, 9)

export const pluckIds = <T extends { id: string }>(items: T[]) => items.map(({ id }) => id)
