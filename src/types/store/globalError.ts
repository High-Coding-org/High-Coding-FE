export interface GlobalErrorProps {
  globalError: boolean;
  globalErrorMsg: string;

  globalErrorOccur: () => void;
  clearGlobalError: () => void;
  setGlobalErrorMsg: (msg: string) => void;
}
