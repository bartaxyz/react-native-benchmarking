import React, { useEffect } from "react";
import {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import AnimateableText from "react-native-animateable-text";
import { StoreApi, UseBoundStore } from "zustand";

export interface RealTimeTextProps<T> {
  store: UseBoundStore<StoreApi<T>>;
  dataPointer: (data: T) => string;
}

export const RealTimeText = <T extends object>({
  store,
  dataPointer,
}: RealTimeTextProps<T>) => {
  const text = useSharedValue("1234.56");

/*   useEffect(() => {
    const unsubscribe = store.subscribe((data) => {
      text.value = dataPointer(data);
    });
    return () => unsubscribe();
  }, [store]);
 */
  const animatedText = useDerivedValue(() => `€${text.value}`);
  const animatedProps = useAnimatedProps(() => {
    return {
      text: animatedText.value,
    };
  });

  return <AnimateableText animatedProps={animatedProps} />;
};
