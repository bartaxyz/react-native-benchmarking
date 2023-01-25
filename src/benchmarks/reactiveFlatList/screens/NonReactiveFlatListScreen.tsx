import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useBitcoinDataStore } from "../store/bitcoinData";

export const NonReactiveFlatListScreen = () => {
  const bitcoinData = useBitcoinDataStore((state) => state.bitcoinData);
  const reverseBitcoinData = useBitcoinDataStore((state) => state.reverseData);

  return (
    <View style={styles.container}>
      <Button title="Reverse" onPress={reverseBitcoinData} />
      <FlatList
        data={bitcoinData}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.x}</Text>
            <Text>{item.y}</Text>
            <Text>{item.x}</Text>
            <Text>{item.y}</Text>
          </View>
        )}
        keyExtractor={(item) => item.x.toString()}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    padding: 16,
    paddingHorizontal: 24,
  },
});
