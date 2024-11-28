import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { OverlayProps } from '@/types/auth';

interface OverlayContentProps {
  title: string;
  description: string;
  buttonText: string;
  onToggle: (value: boolean) => void;
  isSignIn: boolean;
}

const OverlayContent = ({
  title,
  description,
  buttonText,
  onToggle,
  isSignIn,
}: OverlayContentProps) => (
  <div
    className={cn(
      'absolute flex flex-col items-center justify-center w-1/2 h-full px-10 text-center transition-transform ',
      isSignIn ? ' left-0 ' : 'right-0 '
    )}>
    <img
      src={'src/assets/logo.svg'}
      alt="logo"
      className="w-[280px] h-[280px] top-8 mb-40 "
    />
    {/* <h2 className="mb-4 text-2xl font-bold">{title}</h2> */}
    {/* <p className="mb-6">{description}</p> */}
    <Button
      variant="outline"
      onClick={() => onToggle(!isSignIn)}
      // className="absolute w-1/2 bg-[#007AFD]  border-none hover:bg-[#007AFD]/20 bottom-36 text-white hover:text-black/80">
      className="absolute w-1/2 bg-[#007AFD]  border-none text-white hover:bg-black/80 hover:text-white mt-40">
      {buttonText}
    </Button>
  </div>
);

export function AuthOverlay({ isSignIn, onToggle }: OverlayProps) {
  const overlayContent = {
    signIn: {
      title: '환영합니다',
      description: '서비스를 이용하시려면 로그인해 주세요',
      buttonText: '회원가입',
    },
    signUp: {
      title: '안녕하세요!',
      description: '회원가입하고 다양한 서비스를 경험해보세요',
      buttonText: '로그인',
    },
  };

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
          {...overlayContent.signIn}
          isSignIn={true}
          onToggle={onToggle}
        />
        <OverlayContent
          {...overlayContent.signUp}
          isSignIn={false}
          onToggle={onToggle}
        />
      </div>
    </div>
  );
}
