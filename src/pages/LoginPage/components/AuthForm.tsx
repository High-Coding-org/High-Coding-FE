import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AuthFormData, AuthFormProps } from '@/types/auth';

export function AuthForm({ type, onSubmit }: AuthFormProps) {
  const { register, handleSubmit } = useForm<AuthFormData>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center w-full h-full gap-4 px-12">
      <h1 className="text-2xl font-bold">
        {type === 'signin' ? '로그인' : '회원가입'}
      </h1>

      {type === 'signup' && (
        <Input
          {...register('name')}
          type="text"
          placeholder="이름"
          className="w-full"
        />
      )}

      <Input
        {...register('email')}
        type="email"
        placeholder="이메일"
        className="w-full"
      />

      <Input
        {...register('password')}
        type="password"
        placeholder="비밀번호"
        className="w-full"
      />

      {type === 'signin' && (
        <a
          href="#"
          className="text-sm text-muted-foreground hover:underline">
          비밀번호를 잊으셨나요?
        </a>
      )}

      <Button
        type="submit"
        className="w-full">
        {type === 'signin' ? '로그인' : '회원가입'}
      </Button>
    </form>
  );
}
