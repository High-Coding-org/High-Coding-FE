import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import DatePicker from '@/components/common/DatePicker/DatePicker';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SignUpFormData } from '@/types/auth';

export default function SignUpForm() {
  const form = useForm<SignUpFormData>({
    defaultValues: {
      name: '',
      id: '',
      password: '',
      passwordCheck: '',
      phone: '',
    },
  });
  const [birthDate, setBirthDate] = useState<Date>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: SignUpFormData) => {
    const formData = {
      ...data,
      birth: birthDate,
    };
    console.log(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-full h-full gap-4 px-12">
        <FormField
          name="name"
          control={form.control}
          rules={{ required: '이름이 입력되지 않았습니다.' }}
          render={({ field }) => (
            <FormItem className="relative w-full">
              <FormLabel className="text-sm font-medium">이름</FormLabel>
              <FormMessage className="absolute right-0 -translate-y-1/2 top-[2px]" />
              <FormControl>
                <Input
                  placeholder="ex) 김코딩"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="id"
          control={form.control}
          rules={{ required: '아이디가 입력되지 않았습니다.' }}
          render={({ field }) => (
            <FormItem className="relative w-full">
              <FormLabel className="text-sm font-medium">아이디</FormLabel>
              <FormMessage className="absolute right-0 -translate-y-1/2 top-[2px]" />
              <FormControl>
                <Input
                  placeholder="ex) hiCoding123"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          rules={{ required: '비밀번호가 입력되지 않았습니다.' }}
          render={({ field }) => (
            <FormItem className="relative w-full">
              <FormLabel className="text-sm font-medium">비밀번호</FormLabel>
              <FormMessage className="absolute right-0 -translate-y-1/2 top-[2px]" />
              <FormControl>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="비밀번호를 입력해주세요."
                  {...field}
                />
              </FormControl>
              <div
                className="absolute text-gray-500 cursor-pointer right-2 bottom-1"
                onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? <EyeOff /> : <Eye />}
              </div>
            </FormItem>
          )}
        />

        <FormField
          name="passwordCheck"
          control={form.control}
          rules={{
            required: '입력된 비밀번호가 동일하지 않습니다.',
            validate: pwd => pwd === form.watch('password'),
          }}
          render={({ field, fieldState }) => (
            <FormItem className="relative w-full">
              <FormLabel className="text-sm font-medium">
                비밀번호 확인
              </FormLabel>
              {fieldState.invalid && (
                <p className="text-sm text-red-500 absolute right-0 -translate-y-1/2 top-[2px]">
                  입력된 비밀번호가 동일하지 않습니다.
                </p>
              )}
              <FormControl>
                <Input
                  type="password"
                  placeholder="비밀번호를 확인해주세요."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="phone"
          control={form.control}
          rules={{ required: '전화번호가 입력되지 않았습니다.' }}
          render={({ field }) => (
            <FormItem className="relative w-full">
              <FormLabel className="text-sm font-medium">전화번호</FormLabel>
              <FormMessage className="absolute right-0 -translate-y-1/2 top-[2px]" />
              <FormControl>
                <Input
                  placeholder="ex) 010-1234-5678"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormItem className="relative w-full">
          <FormLabel className="text-sm font-medium">생년월일</FormLabel>
          <FormMessage className="absolute right-0 -translate-y-1/2 top-[2px]" />
          <FormControl>
            <DatePicker
              date={birthDate}
              setDate={setBirthDate}
            />
          </FormControl>
        </FormItem>

        <Button
          type="submit"
          className="w-full bg-[#007AFD]">
          가입하기
        </Button>
      </form>
    </Form>
  );
}
