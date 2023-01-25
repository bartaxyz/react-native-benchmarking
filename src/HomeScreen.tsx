import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Button, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { RootStackParams } from "./RootStack";
import { RealTimeText } from "./components/RealTimeText";
import { useBitcoinDataStore } from "./benchmarks/reactiveFlatList/store/bitcoinData";

export const HomeScreen = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Benchmarks</Text>
      <Text style={styles.description}>
        A collection of benchmarks for React Native
      </Text>

      <RealTimeText
        store={useBitcoinDataStore}
        dataPointer={(data) => data.bitcoinData[0].x.toString()}
      />

      <Button
        title="Randomize"
        onPress={() => {
          useBitcoinDataStore.getState().reverseData();
        }}
      />

      <Text style={styles.description}>Tap a benchmark to run it</Text>
      <View style={styles.benchmarks}>
        <Button
          title="Reactive FlatList"
          onPress={() => {
            navigate("ReactiveFlatList");
          }}
        />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
  },
  benchmarks: {
    marginTop: 16,
  },
});
