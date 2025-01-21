import { cn } from '@/lib/utils';

interface LogoProps {
  style: string;
}

export default function Logo({ style }: LogoProps) {
  return (
    <>
      <img
        src={'src/assets/logo.svg'}
        alt="HiCoding-Logo"
        className={cn(style, 'cursor-pointer')}
      />
    </>
  );
}
