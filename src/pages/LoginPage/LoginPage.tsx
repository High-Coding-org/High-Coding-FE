import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { PATH } from '@/routes/path';

import { AuthOverlay } from './AuthOverlay';
import SignInForm from './LoginForm/SignInForm';
import SignUpForm from './LoginForm/SignUpForm';

export default function LoginPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

    if (token) {
      navigate(PATH.HOME);
    }
  }, [navigate]);

  return (
    <div
      id="loginPage-container"
      className="relative w-[800px] h-[600px] bg-card rounded-lg shadow-lg overflow-hidden">
      {/* SignIn */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full transition-transform duration-600 z-[2]
        ${isSignIn ? 'opacity-100 z-[5]' : '-translate-x-full opacity-0 z-[1]'}`}>
        <SignInForm />
      </div>

      {/* SignUp */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full transition-transform duration-600 
        ${isSignIn ? 'opacity-0 z-[1]' : '-translate-x-full opacity-100 z-[5]'}`}>
        <SignUpForm />
      </div>

      <AuthOverlay
        isSignIn={isSignIn}
        onToggle={setIsSignIn}
      />
    </div>
  );
}
