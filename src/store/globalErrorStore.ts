import { create } from 'zustand';

import { GlobalErrorProps } from '@/types/store/globalError';

export const useGlobalErrorStore = create<GlobalErrorProps>()(set => ({
  globalError: false,
  globalErrorMsg: '',

  globalErrorOccur: () => set({ globalError: true }),
  clearGlobalError: () => set({ globalError: false }),
  setGlobalErrorMsg: (msg: string) => set({ globalErrorMsg: msg }),
}));
