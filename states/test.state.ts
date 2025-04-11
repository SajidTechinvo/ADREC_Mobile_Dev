import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ITestState {
  count: number;
}

interface ITestActions {
  increment: VoidFunction;
}

const useTestState = create(
  immer<ITestState & ITestActions>((set) => ({
    count: 0,
    increment: () => {
      set((state) => {
        state.count += 1;
      });
    },
  }))
);

export default useTestState;
