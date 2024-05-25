import { ScrollView, StyleSheet, View } from "react-native";
import { ThemedView } from "../ThemedView/ThemedView";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "../ThemedText/ThemedText";
import { Spacings } from "@/constants/Spacings";

interface Props {
  title?: string;
  scrollable?: boolean;
  removeBottomPadding?: boolean;
}

export function Screen({
  children,
  title,
  scrollable,
  removeBottomPadding,
}: React.PropsWithChildren<Props>) {
  const { top, bottom } = useSafeAreaInsets();

  const Container = scrollable ? ScrollView : View;

  return (
    <ThemedView style={styles.wrapper}>
      <Container
        style={[
          styles.container,
          {
            paddingTop: top + Spacings.s20,
            paddingHorizontal: Spacings.screenPadding,
            paddingBottom: removeBottomPadding
              ? undefined
              : bottom + Spacings.s20,
          },
        ]}
      >
        {title && (
          <ThemedText type={"title"} style={styles.title}>
            {title}
          </ThemedText>
        )}
        {children}
      </Container>
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
