import { ScrollView, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView/ThemedView";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "../ThemedText/ThemedText";
import { Spacings } from "@/constants/Spacings";

interface Props {
  title?: string;
}

export function Screen({ children, title }: React.PropsWithChildren<Props>) {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <ThemedView style={styles.wrapper}>
      <ScrollView
        style={[
          styles.container,
          {
            paddingTop: top + Spacings.s20,
            paddingBottom: bottom + Spacings.s20,
            paddingHorizontal: Spacings.s20,
          },
        ]}
      >
        {title && (
          <ThemedText type={"title"} style={styles.title}>
            {title}
          </ThemedText>
        )}
        {children}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  title: {
    marginBottom: Spacings.s16,
  },
});
