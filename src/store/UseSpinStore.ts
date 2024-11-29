import { create } from 'zustand'

interface SpinState {
  isSpinning: boolean
  rotationDegree: number
  startSpin: () => void
  stopSpin: () => void
}

export const useSpinStore = create<SpinState>((set) => ({
  isSpinning: false,
  rotationDegree: 0,
  startSpin: () => set((state) => ({ isSpinning: true, rotationDegree: state.rotationDegree + 1080 })),
  stopSpin: () => set({ isSpinning: false }),
}))

