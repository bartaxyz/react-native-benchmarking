import { useRef } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import AnimateableText from "react-native-animateable-text";
import { useBitcoinDataStore } from "../store/bitcoinData";

export const ReactiveFlatListScreen = () => {
  const bitcoinData = useBitcoinDataStore((state) => state.bitcoinData);
  const reverseBitcoinData = useBitcoinDataStore((state) => state.reverseData);

  return (
    <View style={styles.container}>
      <Button title="Reverse" onPress={reverseBitcoinData} />
      <FlatList
        data={bitcoinData}
        renderItem={({ item }) => {
          const textXRef = useRef<typeof AnimateableText>(null);
          const textYRef = useRef<AnimateableText>(null);

          textXRef.current.

          return (
          <View style={styles.item}>
            <AnimateableText animatedProps={{}}>{item.x}</AnimateableText>
            <AnimateableText>{item.y}</AnimateableText>
          </View>
        )}}
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
