import { NavigationProp, useNavigation } from "@react-navigation/native";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

interface Benchmark {
  key: string;
}

export interface BenchmarkDashboardScreenProps {
  benchmarks: Benchmark[];
}

export const BenchmarkDashboardScreen: React.FC<
  BenchmarkDashboardScreenProps
> = ({ benchmarks }) => {
  const { navigate } = useNavigation<any>();
  return (
    <FlatList
      data={benchmarks}
      style={styles.list}
      renderItem={({ item }) => {
        const onPress = () => {
          navigate(item.key);
        };

        return (
          <Pressable onPress={onPress} style={styles.item}>
            <Text>{item.key}</Text>
          </Pressable>
        );
      }}
      keyExtractor={(item) => item.key}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexGrow: 1,
  },
  item: {
    padding: 16,
    paddingHorizontal: 24,
  },
});

export const getBenchmarkDashboardScreen =
  (benchmarks: Benchmark[]): React.FC =>
  () => {
    return <BenchmarkDashboardScreen benchmarks={benchmarks} />;
  };
