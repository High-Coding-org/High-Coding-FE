import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import SideBar from '@/components/common/SideBar/SideBar';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { usePasswordChange } from '@/hooks/api/usePasswordChange';

import PasswordFormField from './PasswordFormField';
import { formSchema } from './passwordSchema';

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
    mode: 'onSubmit',
    shouldUnregister: true,
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  const handleSuccess = data => {
    toast.success(data.data.message);
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
              />
              <PasswordFormField
                control={form.control}
                name="newPassword"
                label="새 비밀번호"
                showPassword={showPasswords.newPassword}
                togglePasswordVisibility={() =>
                  togglePasswordVisibility('newPassword')
                }
              />
              <PasswordFormField
                control={form.control}
                name="confirmNewPassword"
                label="새 비밀번호 확인"
                showPassword={showPasswords.confirmNewPassword}
                togglePasswordVisibility={() =>
                  togglePasswordVisibility('confirmNewPassword')
                }
              />
              <div className="flex gap-4 mt-4">
                <Button
                  type="submit"
                  className="w-20 mt-4"
                  disabled={form.formState.isSubmitting}>
                  수정
                </Button>
              </div>
            </form>
          </Form>
        </main>
        <aside className="h-auto w-[12rem]">
          <SideBar />
        </aside>
      </div>
    </>
  );
}
