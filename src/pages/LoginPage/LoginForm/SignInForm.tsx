import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SignInFormData } from '@/types/auth';

export default function SignInForm() {
  const { register, handleSubmit } = useForm<SignInFormData>();

  const onSubmit = (data: SignInFormData) => {
    console.log(data);
  };

  return (
    <>
      <form
        id="signin-form"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-full h-full gap-4 px-12 ">
        <h1 className="text-2xl font-bold">로그인</h1>

        <Input
          {...register('id')}
          type="text"
          placeholder="아이디"
          className="w-full"
        />

        <Input
          {...register('password')}
          type="password"
          placeholder="비밀번호"
          className="w-full"
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

        <div className="flex items-center justify-center gap-4 ">
          <button className="bg-white bg-contain bg-no-repeat bg-[url('src/assets/social/btn_google.svg')] w-7 h-7 cursor-pointer  border-gray-400 rounded-md" />
          <button className="bg-white bg-contain bg-no-repeat bg-[url('src/assets/social/btn_kakao.svg')] w-7 h-7 cursor-pointer mx-4" />
          <button className="bg-white bg-contain bg-no-repeat bg-[url('src/assets/social/btn_naver.svg')] w-7 h-7 cursor-pointer " />
        </div>
      </form>
    </>
  );
}
