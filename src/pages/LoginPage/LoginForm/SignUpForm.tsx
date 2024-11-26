import { useState } from 'react';
import { useForm } from 'react-hook-form';

import DatePicker from '@/components/common/DatePicker/datePicker';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SignUpFormData } from '@/types/auth';

export default function SignUpForm() {
  const { register, handleSubmit } = useForm<SignUpFormData>();
  const [birthDate, setBirthDate] = useState<Date>();

  console.log(birthDate);

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center w-full h-full gap-4 px-12">
      <h1 className="text-2xl font-bold">회원가입</h1>

      <Input
        {...register('name')}
        id="name"
        type="text"
        placeholder="이름"
        className="w-full"
      />

      <Input
        {...register('id')}
        id="id"
        type="text"
        placeholder="아이디"
        className="w-full"
      />

      <Input
        {...register('password')}
        id="password"
        type="password"
        placeholder="비밀번호"
        className="w-full"
      />

      <Input
        id="passwordCheck"
        type="password"
        placeholder="비밀번호 확인"
        className="w-full"
      />

      <Input
        {...register('phone')}
        id="phone"
        type="text"
        placeholder="전화번호"
        className="w-full"
      />

      <DatePicker
        date={birthDate}
        setDate={setBirthDate}
      />

      <Button
        type="submit"
        className="w-full bg-[#007AFD]">
        가입하기
      </Button>
    </form>
  );
}
