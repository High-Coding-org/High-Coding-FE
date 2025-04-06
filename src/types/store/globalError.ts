export interface GlobalErrorProps {
  hasError: boolean;
  errorMsg: string;

  errorOccur: () => void;
  clearError: () => void;
  setErrorMsg: (msg: string) => void;
  clearErrorMsg: () => void;
}
