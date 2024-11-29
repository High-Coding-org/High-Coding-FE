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
      phone: '',
    },
  });
  const [birthDate, setBirthDate] = useState<Date>();

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
        <h1 className="text-2xl font-bold">회원가입</h1>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm font-medium">이름</FormLabel>
              <FormControl>
                <Input
                  placeholder="이름을 입력해주세요"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm font-medium">아이디</FormLabel>
              <FormControl>
                <Input
                  placeholder="아이디를 입력해주세요"
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
              <FormLabel className="text-sm font-medium">비밀번호</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormItem className="w-full">
          <FormLabel className="text-sm font-medium">비밀번호 확인</FormLabel>
          <Input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            className="w-full"
          />
        </FormItem>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm font-medium">전화번호</FormLabel>
              <FormControl>
                <Input
                  placeholder="전화번호를 입력해주세요"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormItem className="w-full">
          <FormLabel className="text-sm font-medium">생년월일</FormLabel>
          <DatePicker
            date={birthDate}
            setDate={setBirthDate}
          />
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
