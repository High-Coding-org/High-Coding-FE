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
import { SignInFormData } from '@/types/auth';

export default function SignInForm() {
  const socials = ['google', 'kakao', 'naver'];
  const form = useForm<SignInFormData>({
    defaultValues: {
      id: '',
      password: '',
    },
  });

  const onSubmit = (data: SignInFormData) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        id="signin-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-full h-full gap-4 px-12">
        <h1 className="text-2xl font-bold">로그인</h1>

        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="아이디"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  type="password"
                  placeholder="비밀번호"
                  {...field}
                />
              </FormControl>
              <FormMessage />
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
          {socials.map((social, idx) => (
            <button
              key={idx + social}
              className={`bg-white bg-contain bg-no-repeat bg-[url('src/assets/social/btn_${social}.svg')] w-8 h-8 cursor-pointer border-gray-400 rounded-md ${idx === 1 && 'mx-4'}`}
            />
          ))}
        </div>
      </form>
    </Form>
  );
}
