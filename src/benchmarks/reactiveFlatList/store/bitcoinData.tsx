import axios from "axios";
import create from "zustand";

export interface BitcoinDataValue {
  x: number;
  y: number;
}

export interface BitcoinData {
  status: string;
  name: string;
  unit: string;
  period: string;
  description: string;
  values: BitcoinDataValue[];
}

export interface BitcoinDataStore {
  bitcoinData: BitcoinDataValue[];
  setBitcoinData: (bitcoinData: BitcoinDataValue[]) => void;
  refreshBitcoinData: () => Promise<void | BitcoinData>;
  reverseData: () => void;
}

export const useBitcoinDataStore = create<BitcoinDataStore>((set) => ({
  bitcoinData: [],
  setBitcoinData: (bitcoinData) => set({ bitcoinData }),
  refreshBitcoinData: async () => {
    return await axios<BitcoinData>(
      "https://api.blockchain.info/charts/market-price?timespan=60months&format=json"
    )
      .then((response) => {
        set({ bitcoinData: response.data.values });
        return response.data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },

  reverseData: () => {
    set((state) => ({
      bitcoinData: [...state.bitcoinData.reverse()],
    }));
  },
}));
