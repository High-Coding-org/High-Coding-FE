import { useNavigate } from 'react-router';

import { cn } from '@/lib/utils';

interface LogoProps {
  style: string;
}

export default function Logo({ style }: LogoProps) {
  const navigate = useNavigate();

  return (
    <>
      <img
        src={'src/assets/logo.svg'}
        alt="HiCoding-Logo"
        onClick={() => navigate('/')}
        className={cn(style, 'cursor-pointer')}
      />
    </>
  );
}
