import { useState } from 'react';

import { AuthOverlay } from '@/pages/LoginPage/components/AuthOverlay';
import { AuthFormData } from '@/types/auth';

import { AuthForm } from './components/AuthForm';

export default function LoginPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSubmit = (data: AuthFormData) => {
    // TODO: 실제 인증 로직 구현
    console.log(data);
  };

  return (
    <div
      id="loginPage-container"
      className="relative w-[800px] h-[600px] bg-card rounded-lg shadow-lg overflow-hidden">
      {/* SignIn */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full transition-transform duration-600 z-2
        ${isSignIn ? 'opacity-100 z-5' : '-translate-x-full opacity-0 z-1'}`}>
        <AuthForm
          type="signin"
          onSubmit={handleSubmit}
        />
      </div>

      {/* SignUp */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full transition-transform duration-600 
        ${isSignIn ? 'opacity-0 z-1' : '-translate-x-full opacity-100 z-5'}`}>
        <AuthForm
          type="signup"
          onSubmit={handleSubmit}
        />
      </div>

      <AuthOverlay
        isSignIn={isSignIn}
        onToggle={setIsSignIn}
      />
    </div>
  );
}
