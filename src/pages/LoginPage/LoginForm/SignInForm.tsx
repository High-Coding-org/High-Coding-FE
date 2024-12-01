import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { INVALID_FORM_STYLE } from '@/constants/formValidation';
import { SOCIAL_LOGOS } from '@/constants/socialLogos';
import { SignInFormData } from '@/types/auth';

export default function SignInForm() {
  const form = useForm<SignInFormData>({
    defaultValues: {
      id: '',
      password: '',
    },
  });

  /*
    axiosInstance.post('/login', {
      email: email,
      password: password,
    });
  */

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
          name="id"
          control={form.control}
          rules={{ required: ' ' }}
          render={({ field, fieldState }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  className={`${fieldState.invalid ? INVALID_FORM_STYLE : ''}`}
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
          rules={{ required: ' ' }}
          render={({ field, fieldState }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  type="password"
                  className={`${fieldState.invalid ? INVALID_FORM_STYLE : ''}`}
                  placeholder="비밀번호"
                  {...field}
                />
              </FormControl>
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
