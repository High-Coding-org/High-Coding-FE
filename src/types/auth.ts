interface SignInFormData {
  id: string;
  password: string;
}

interface SignUpFormData {
  name: string;
  id: string;
  password: string;
  phone: string;
  birth: Date;
}

interface OverlayProps {
  isSignIn: boolean;
  onToggle: (value: boolean) => void;
}

export type { OverlayProps, SignInFormData, SignUpFormData };
