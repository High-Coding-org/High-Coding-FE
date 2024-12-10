import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SOCIAL_LOGOS } from '@/constants/socialLogos';
import { useSignIn } from '@/hooks/api/useAuth';
import { SignInFormData } from '@/types/auth';

export default function SignInForm() {
  const { mutate: signIn, isError } = useSignIn();
  const form = useForm<SignInFormData>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (data: SignInFormData) => {
    signIn(data);
  };

  useEffect(() => {
    if (isError) {
      form.setError('password', {
        type: 'authentication',
        message: '아이디 또는 비밀번호가 일치하지 않습니다.',
      });
    }
  }, [form, isError]);

  return (
    <Form {...form}>
      <form
        id="signin-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-full h-full gap-4 px-12">
        <h1 className="text-2xl font-bold">로그인</h1>

        <FormField
          name="username"
          control={form.control}
          rules={{ required: '' }}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="아이디"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          rules={{ required: '' }}
          render={({ field, formState }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  type="password"
                  placeholder="비밀번호"
                  {...field}
                />
              </FormControl>
              {formState.errors.password && (
                <FormMessage>{formState.errors.password.message}</FormMessage>
              )}
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-[#007AFD]">
          로그인
        </Button>

        <div className="flex items-center w-full mt-4 mb-2">
          <div className="flex-grow h-[1px] bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">또는</span>
          <div className="flex-grow h-[1px] bg-gray-300"></div>
        </div>

        <div className="flex items-center justify-center gap-4">
          {SOCIAL_LOGOS.map((Logo, idx) => (
            <button
              key={`${idx}-logo`}
              className={`bg-white w-8 h-8 cursor-pointer border-gray-400 rounded-md ${idx === 1 && 'mx-4'}`}>
              <Logo className="w-full h-full" />
            </button>
          ))}
        </div>
      </form>
    </Form>
  );
}
