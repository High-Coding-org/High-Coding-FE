import Logo from '@/components/common/Logo/Logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { OverlayProps } from '@/types/auth';

interface OverlayContentProps {
  buttonText: string;
  onToggle: (value: boolean) => void;
  isSignIn: boolean;
}

const OverlayContent = ({
  buttonText,
  onToggle,
  isSignIn,
}: OverlayContentProps) => (
  <div
    className={cn(
      'absolute flex flex-col items-center justify-center w-1/2 h-full px-10 text-center transition-transform ',
      isSignIn ? ' left-0 ' : 'right-0 '
    )}>
    <Logo style="w-[280px] h-[120px] top-8 mb-40" />
    <Button
      variant="outline"
      onClick={() => onToggle(!isSignIn)}
      className="absolute w-1/2 bg-[#007AFD]  border-none text-white hover:bg-black/80 hover:text-white mt-40">
      {buttonText}
    </Button>
  </div>
);

export function AuthOverlay({ isSignIn, onToggle }: OverlayProps) {
  const buttonText = isSignIn ? '회원가입 →' : '로그인 →';

  return (
    <div
      className={cn(
        'absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform',
        isSignIn && 'translate-x-[-100%]'
      )}>
      <div
        className={cn(
          'relative text-white w-[200%] h-full -left-full transform transition-transform',
          isSignIn
            ? 'bg-gradient-to-br from-[#f1f1f1] to-[#6366F1]'
            : 'bg-gradient-to-tl from-[#f1f1f1] to-[#6366F1]',
          isSignIn && 'translate-x-1/2'
        )}>
        <OverlayContent
          buttonText={buttonText}
          isSignIn={true}
          onToggle={onToggle}
        />
        <OverlayContent
          buttonText={buttonText}
          isSignIn={false}
          onToggle={onToggle}
        />
      </div>
    </div>
  );
}
