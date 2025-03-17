import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

import { usePasswordChange } from '@/hooks/api/usePasswordChange';
import { formSchema } from './passwordSchema';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import SideBar from '@/components/common/SideBar';
import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import PasswordFormField from './PasswordFormField';

//! DUMMY_SIDEBAR_DATA
const DUMMY_SIDEBAR_DATA = [
  { name: '프로필', url: '/profile' },
  { name: '회원 정보 수정', url: '/profile' },
  { name: '로그아웃', url: '/logout' },
];

export default function ProfileEdit() {
  const { mutate } = usePasswordChange();

  const [showPasswords, setShowPasswords] = useState({
    currentPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  const togglePasswordVisibility = field => {
    setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  const handleSuccess = data => {
    toast.success(data.message);
    form.reset();
  };

  const handleError = error => {
    toast.error(
      error.response.data.message || '예상치 못한 오류가 발생했습니다'
    );
  };

  const onSubmit = values => {
    mutate(
      {
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      },
      { onSuccess: handleSuccess, onError: handleError }
    );
  };

  return (
    <>
      <header className="w-full max-w-[1140px] p-6 mt-2">
        <BreadcrumbAndTitle />
      </header>
      <div className="w-full max-w-[1140px] flex justify-between gap-16 mt-2 p-4">
        <main className="flex-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <PasswordFormField
                control={form.control}
                name="currentPassword"
                label="기존 비밀번호"
                showPassword={showPasswords.currentPassword}
                togglePasswordVisibility={() =>
                  togglePasswordVisibility('currentPassword')
                }
                trigger={form.trigger}
              />
              <PasswordFormField
                control={form.control}
                name="newPassword"
                label="새 비밀번호"
                showPassword={showPasswords.newPassword}
                togglePasswordVisibility={() =>
                  togglePasswordVisibility('newPassword')
                }
                trigger={form.trigger}
              />
              <PasswordFormField
                control={form.control}
                name="confirmNewPassword"
                label="새 비밀번호 확인"
                showPassword={showPasswords.confirmNewPassword}
                togglePasswordVisibility={() =>
                  togglePasswordVisibility('confirmNewPassword')
                }
                trigger={form.trigger}
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
        </main>
        <aside className="h-auto w-[12rem]">
          <SideBar menuItems={DUMMY_SIDEBAR_DATA} />
        </aside>
      </div>
    </>
  );
}
