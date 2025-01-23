import { create } from 'zustand';

import { GlobalErrorProps } from '@/types/store/globalError';

export const useGlobalErrorStore = create<GlobalErrorProps>()(set => ({
  globalError: false,

  globalErrorOccur: () => set({ globalError: true }),
  closeGlobalError: () => set({ globalError: false }),
}));
