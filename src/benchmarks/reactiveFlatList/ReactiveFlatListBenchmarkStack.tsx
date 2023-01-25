import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { getBenchmarkDashboardScreen } from "../../screens/BenchmarkDashboardScreen";
import { NonReactiveFlatListScreen } from "./screens/NonReactiveFlatListScreen";
import { ReactiveFlatListScreen } from "./screens/ReactiveFlatListScreen";
import { useBitcoinDataStore } from "./store/bitcoinData";

type ReactiveFlatListBenchmarkStackParams = {
  ReactiveFlatListHome: undefined;
  ReactiveFlatListTest: undefined;
  NonReactiveFlatListTest: undefined;
};

const Stack =
  createNativeStackNavigator<ReactiveFlatListBenchmarkStackParams>();

export const ReactiveFlatListBenchmarkStack = () => {
  const bitcoinData = useBitcoinDataStore((state) => state.bitcoinData);
  const refreshBitcoinData = useBitcoinDataStore(
    (state) => state.refreshBitcoinData
  );

  useEffect(() => {
    /**
     * To not mess with the benchmark, we fetch the bitcoin data on this screen
     * instead. This allows the benchmarks to run without network overhead.
     */
    if (bitcoinData.length === 0) {
      refreshBitcoinData();
    }
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReactiveFlatListHome"
        component={getBenchmarkDashboardScreen([
          {
            key: "ReactiveFlatListTest",
          },
          {
            key: "NonReactiveFlatListTest",
          },
        ])}
      />
      <Stack.Screen
        name="ReactiveFlatListTest"
        component={ReactiveFlatListScreen}
      />
      <Stack.Screen
        name="NonReactiveFlatListTest"
        component={NonReactiveFlatListScreen}
      />
    </Stack.Navigator>
  );
};
