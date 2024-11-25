interface AuthFormProps {
  type: 'signin' | 'signup';
  onSubmit: (data: AuthFormData) => void;
}

interface AuthFormData {
  email: string;
  password: string;
  name?: string;
}

interface OverlayProps {
  isSignIn: boolean;
  onToggle: (value: boolean) => void;
}

export type { AuthFormData, AuthFormProps, OverlayProps };
