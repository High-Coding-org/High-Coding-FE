import { create } from 'zustand';

import { KitDetailErrorProps } from '@/types/store/kitDetailError';

export const useKitDetailErrorStore = create<KitDetailErrorProps>()(set => ({
  kitDetailError: false,
  kitDetailErrorMsg: '',

  kitDetailErrorOccur: () => set({ kitDetailError: true }),
  clearKitDetailError: () => set({ kitDetailError: false }),
  setErrorMsg: (msg: string) => set({ kitDetailErrorMsg: msg }),
  clearErrorMsg: () => set({ kitDetailErrorMsg: '' }),
}));
