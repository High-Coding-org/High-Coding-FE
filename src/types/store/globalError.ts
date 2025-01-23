export interface GlobalErrorProps {
  globalError: boolean;

  globalErrorOccur: () => void;
  closeGlobalError: () => void;
}
