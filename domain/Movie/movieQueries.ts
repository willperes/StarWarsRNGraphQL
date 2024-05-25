import { gql } from "@/graphql/__generated__"

const GET_LIST_PAGINATED = gql(`
    query GetListPaginated($pageAmount: Int!, $afterCursor: String) {
        allFilms(first: $pageAmount, after: $afterCursor) {
            edges {
                cursor
                node {
                    title
                    episodeID
                    releaseDate
                    director
                    producers
                }
            }
            pageInfo {
                startCursor
                endCursor
                hasNextPage
                hasPreviousPage
            }
            totalCount
        }
    }
`);

export const movieQueries = {
    GET_LIST_PAGINATED
}