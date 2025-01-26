import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
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
import SideBar from '@/components/common/SideBar';
import BreadcrumbAndTitle from '@/components/common/Breadcrumb';

const formSchema = z
  .object({
    password: z.string().min(1, {
      message: '비밀번호를 작성해주세요.',
    }),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

const DUMMY_FORM_DATA = {
  name: '김가연',
  phone: '010-****-1425',
  birth: '2003.10.27',
  id: 'pine',
  password: '1234',
  confirmPassword: '1234',
};

const DUMMY_SIDEBAR_DATA = [
  { name: '프로필', url: '/profile' },
  { name: '회원 정보 수정', url: '/profile/edit' },
  { name: '로그아웃', url: '/logout' },
];

export default function ProfileEdit() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: DUMMY_FORM_DATA.password,
      confirmPassword: DUMMY_FORM_DATA.password,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const handleCancel = () => {
    form.reset();
  };

  return (
    <>
      <header className="w-full max-w-[1140px] p-6 mt-2">
        <BreadcrumbAndTitle />
      </header>
      <main className="w-full max-w-[1140px] flex justify-between gap-16 mt-2 p-4">
        <div className="flex-1">
          <div className="flex flex-col border-b-[1px] border-gray-200 py-2 md:flex-row md:items-center">
            <span className="text-sm text-gray-600 w-32 p-2">이름</span>
            <div className="flex-1 p-2"> {DUMMY_FORM_DATA.name}</div>
          </div>
          <div className="flex flex-col  border-b-[1px] border-gray-200 py-2 md:flex-row md:items-center">
            <span className="text-sm text-gray-600 w-32 p-2">전화번호</span>
            <div className="flex-1 p-2"> {DUMMY_FORM_DATA.phone}</div>
          </div>
          <div className="flex flex-col border-b-[1px] border-gray-200 py-2 md:flex-row md:items-center">
            <span className="text-sm text-gray-600 w-32 p-2">생년월일</span>
            <div className="flex-1 p-2"> {DUMMY_FORM_DATA.birth}</div>
          </div>
          <div className="flex flex-col border-b-[1px] border-gray-200 py-2 md:flex-row md:items-center">
            <span className="text-sm text-gray-600 w-32 p-2">아이디</span>
            <div className="flex-1 p-2"> {DUMMY_FORM_DATA.id}</div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex flex-col border-b-[1px] border-gray-200 py-2 md:flex-row md:items-center">
                    <FormLabel className="text-sm text-gray-600 w-32 p-2">
                      비밀번호
                    </FormLabel>
                    <div className="flex flex-col gap-2 pb-2">
                      <FormControl>
                        <Input
                          type="password"
                          value="1234"
                          placeholder="비밀번호를 입력해주세요."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="flex flex-col border-b-[1px] border-gray-200 py-2 md:flex-row md:items-center">
                    <FormLabel className="text-sm text-gray-600 w-32 p-2">
                      비밀번호 확인
                    </FormLabel>
                    <div className="flex flex-col gap-2 pb-2">
                      <FormControl>
                        <Input
                          placeholder="비밀번호를 입력해주세요."
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <div className="flex gap-4 mt-4">
                <Button
                  type="submit"
                  variant="outline"
                  onClick={handleCancel}
                  className="mt-4 w-20">
                  취소
                </Button>
                <Button
                  type="submit"
                  className="mt-4 w-20"
                  disabled={form.formState.isSubmitting}>
                  수정
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <aside className="h-auto w-[12rem]">
          <SideBar menuItems={DUMMY_SIDEBAR_DATA} />
        </aside>
      </main>
    </>
  );
}
