import { create } from 'zustand';

import { GlobalErrorProps } from '@/types/store/globalError';

export const useGlobalErrorStore = create<GlobalErrorProps>()(set => ({
  hasError: false,
  errorMsg: '',

  errorOccur: () => set({ hasError: true }),
  clearError: () => set({ hasError: false }),
  setErrorMsg: (msg: string) => set({ errorMsg: msg }),
  clearErrorMsg: () => set({ errorMsg: '' }),
}));
