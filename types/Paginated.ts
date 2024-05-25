type PageInfo = {
    startCursor: string
    endCursor: string
    hasNextPage: boolean
    hasPreviousPage: boolean
}

export type Edge<T> = {
    cursor: string
    node: T
}

export type Paginated<T> = {
    edges: Edge<T>[]
    pageInfo: PageInfo
    totalCount: number;
}
