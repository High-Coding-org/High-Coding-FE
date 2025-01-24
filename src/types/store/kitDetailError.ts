export interface KitDetailErrorProps {
  kitDetailError: boolean;
  kitDetailErrorMsg: string;

  kitDetailErrorOccur: () => void;
  clearKitDetailError: () => void;
  setErrorMsg: (msg: string) => void;
  clearErrorMsg: () => void;
}
