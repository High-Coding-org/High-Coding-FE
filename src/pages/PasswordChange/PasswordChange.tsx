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
    currentPassword: z.string().min(6, {
      message: '6자리 이상 작성해주세요.',
    }),
    newPassword: z.string().min(6, {
      message: '6자리 이상 작성해주세요.',
    }),
    confirmNewPassword: z.string(),
  })
  .refine(data => data.newPassword === data.confirmNewPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmNewPassword'],
  });

const DUMMY_SIDEBAR_DATA = [
  { name: '프로필', url: '/profile' },
  { name: '회원 정보 수정', url: '/profile' },
  { name: '로그아웃', url: '/logout' },
];

export default function ProfileEdit() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <header className="w-full max-w-[1140px] p-6 mt-2">
        <BreadcrumbAndTitle />
      </header>
      <div className="w-full max-w-[1140px] flex justify-between gap-16 mt-2 p-4">
        <div className="flex-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem className="flex flex-col border-b-[1px] border-gray-200 py-2 md:flex-row">
                    <FormLabel className="text-sm text-gray-600 w-32 px-2 pt-4">
                      기존 비밀번호
                    </FormLabel>
                    <div className="flex flex-col w-[24rem] gap-2 pb-2">
                      <FormControl className="md:items-center">
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
                name="newPassword"
                render={({ field }) => (
                  <FormItem className="flex flex-col border-b-[1px] border-gray-200 py-2 md:flex-row">
                    <FormLabel className="text-sm text-gray-600 w-32 px-2 pt-4 ">
                      새 비밀번호
                    </FormLabel>
                    <div className="flex flex-col w-[24rem] gap-2 pb-2">
                      <FormControl className="md:items-center">
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
                name="confirmNewPassword"
                render={({ field }) => (
                  <FormItem className="flex flex-col border-b-[1px] border-gray-200 py-2 md:flex-row">
                    <FormLabel className="text-sm text-gray-600 w-32 px-2 pt-4">
                      새 비밀번호 확인
                    </FormLabel>
                    <div className="flex flex-col w-[24rem] gap-2 pb-2 md:items-center">
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
      </div>
    </>
  );
}
