import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ReactiveFlatListBenchmarkStack } from "./benchmarks/reactiveFlatList/ReactiveFlatListBenchmarkStack";
import { HomeScreen } from "./HomeScreen";

export type RootStackParams = {
  Home: undefined;
  ReactiveFlatList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />

        {/** Benchmarks */}
        <Stack.Screen
          name="ReactiveFlatList"
          component={ReactiveFlatListBenchmarkStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
