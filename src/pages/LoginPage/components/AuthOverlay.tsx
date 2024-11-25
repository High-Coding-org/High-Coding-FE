import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { OverlayProps } from '@/types/auth';

export function AuthOverlay({ isSignIn, onToggle }: OverlayProps) {
  return (
    <div
      className={cn(
        'absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600',
        isSignIn && 'translate-x-[-100%]'
      )}>
      <div
        className={cn(
          'relative bg-gradient-to-r from-primary to-destructive text-white w-[200%] h-full -left-full transform transition-transform duration-600',
          isSignIn && 'translate-x-1/2'
        )}>
        <div
          className={cn(
            'absolute flex flex-col items-center justify-center w-1/2 h-full px-10 text-center transition-transform duration-600 -translate-x-[20%]',
            isSignIn && 'translate-x-0'
          )}>
          <h2 className="mb-4 text-2xl font-bold">환영합니다</h2>
          <p className="mb-6">서비스를 이용하시려면 로그인해 주세요</p>
          <Button
            variant="outline"
            onClick={() => onToggle(!isSignIn)}
            className="text-black border-white hover:bg-white/20">
            회원가입
          </Button>
        </div>

        <div
          className={cn(
            'absolute right-0 flex flex-col items-center justify-center w-1/2 h-full px-10 text-center transition-transform duration-600',
            isSignIn && 'translate-x-[20%]'
          )}>
          <h2 className="mb-4 text-2xl font-bold">안녕하세요!</h2>
          <p className="mb-6">회원가입하고 다양한 서비스를 경험해보세요</p>
          <Button
            variant="outline"
            onClick={() => onToggle(!isSignIn)}
            className="text-black border-white hover:bg-white/20">
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
}
