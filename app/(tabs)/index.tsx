import { MovieCard } from "@/components/MovieCard/MovieCard";
import { Screen } from "@/components/Screen/Screen";
import { ThemedText } from "@/components/ThemedText/ThemedText";
import { Spacings } from "@/constants/Spacings";
import { Movie } from "@/domain/Movie/movieTypes";
import { useMovieList } from "@/domain/Movie/useCases/useMovieList";
import { Edge } from "@/types/Paginated";
import { FlatList, ListRenderItemInfo } from "react-native";

export default function MoviesScreen() {
  const movieList = useMovieList();

  function renderItem({ item }: ListRenderItemInfo<Edge<Movie>>) {
    return (
      <MovieCard
        director={item.node.director}
        producers={item.node.producers}
        title={item.node.title}
        releaseDate={item.node.releaseDate}
      />
    );
  }

  return (
    <Screen title={"Movies"} removeBottomPadding>
      <FlatList
        data={movieList?.allFilms.edges}
        renderItem={renderItem}
        contentContainerStyle={{
          flexGrow: 1,
          gap: Spacings.s12,
          paddingBottom: Spacings.screenPadding,
        }}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}
