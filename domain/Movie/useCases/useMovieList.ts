import { useQuery } from "@apollo/client";
import { movieQueries } from "../movieQueries";
import { useEffect } from "react";
import { Paginated } from "@/types/Paginated";
import { Movie } from "../movieTypes";

type GetListPaginated = { allFilms: Paginated<Movie> }

export function useMovieList() {
    const { data } = useQuery<GetListPaginated>(movieQueries.GET_LIST_PAGINATED, { variables: { pageAmount: 10, afterCursor: undefined } })

    useEffect(() => {
        console.log(data);
    }, [data])

    return data;
}