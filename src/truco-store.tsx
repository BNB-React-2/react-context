import { create } from 'zustand';

type TrucoStoreType = {
  teamA: number;
  teamB: number;
  incrementA: () => any;
  incrementB: () => any;
  reset: () => any;
};

export const useTrucoStore = create<TrucoStoreType>((set) => ({
  teamA: 0,
  teamB: 0,
  incrementA: () => set((state) => ({ teamA: state.teamA + 1 })),
  incrementB: () => set((state) => ({ teamB: state.teamB + 1 })),
  reset: () => set(() => ({ teamA: 0, teamB: 0 })),
}));
