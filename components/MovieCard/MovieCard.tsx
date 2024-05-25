import { Movie } from "@/domain/Movie/movieTypes";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText/ThemedText";
import { Spacings } from "@/constants/Spacings";
import { BorderRadius } from "@/constants/BorderRadius";
import { format } from "date-fns";

type Props = Pick<Movie, "title" | "releaseDate" | "director" | "producers">;

export function MovieCard({ director, producers, title, releaseDate }: Props) {
  const backgroundColor = useThemeColor({}, "secondaryBackground");

  return (
    <View style={[styles.card, { backgroundColor }]}>
      <ThemedText type={"subtitle"}>
        {title}{" "}
        <ThemedText style={{ fontWeight: "500" }}>
          {`(${format(releaseDate, "yyyy")})`}
        </ThemedText>
      </ThemedText>

      <ThemedText>{`Directed by: ${director}`}</ThemedText>
      <ThemedText>{`Producers: ${producers.join(", ")}`}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    padding: Spacings.s12,
    borderRadius: BorderRadius.r12,
  },
});
