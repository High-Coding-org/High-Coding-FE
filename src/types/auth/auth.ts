interface SignInFormData {
  username: string;
  password: string;
}

interface SignUpFormData {
  name: string;
  username: string;
  password: string;
  passwordCheck?: string;
  phonePrefix: string;
  phoneNumber: string;
  birth: Date;
}

interface OverlayProps {
  isSignIn: boolean;
  onToggle: (value: boolean) => void;
}

export type { OverlayProps, SignInFormData, SignUpFormData };
