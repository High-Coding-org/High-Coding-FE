import { useNavigate } from 'react-router';

import { cn } from '@/lib/utils';
interface LogoProps {
  style: string;
}

export default function Logo({ style }: LogoProps) {
  const navigate = useNavigate();
  const logoUrl = new URL('@/assets/logo.svg', import.meta.url).href;

  return (
    <>
      <img
        src={logoUrl}
        alt="HiCoding-Logo"
        onClick={() => navigate('/')}
        className={cn(style, 'cursor-pointer')}
      />
    </>
  );
}
