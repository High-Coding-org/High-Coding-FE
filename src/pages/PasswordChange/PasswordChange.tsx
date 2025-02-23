import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import SideBar from '@/components/common/SideBar';
import BreadcrumbAndTitle from '@/components/common/Breadcrumb';
import { usePasswordChange } from './usePasswordChange';
import { formSchema } from './passwordSchema';
import { toast } from 'react-toastify';
import { PasswordFormField } from './PasswordFormField';

const DUMMY_SIDEBAR_DATA = [
  { name: '프로필', url: '/profile' },
  { name: '회원 정보 수정', url: '/profile' },
  { name: '로그아웃', url: '/logout' },
];

export default function ProfileEdit() {
  const { mutate } = usePasswordChange();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

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
    toast.success(data);
    form.reset();
  };

  const handleError = error => {
    toast.error('비밀번호 변경 실패: ' + error.message);
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
        <div className="flex-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <PasswordFormField
                control={form.control}
                name="currentPassword"
                label="기존 비밀번호"
                showPassword={showCurrentPassword}
                togglePasswordVisibility={() =>
                  setShowCurrentPassword(!showCurrentPassword)
                }
              />
              <PasswordFormField
                control={form.control}
                name="newPassword"
                label="새 비밀번호"
                showPassword={showNewPassword}
                togglePasswordVisibility={() =>
                  setShowNewPassword(!showNewPassword)
                }
              />
              <PasswordFormField
                control={form.control}
                name="confirmNewPassword"
                label="새 비밀번호 확인"
                showPassword={showConfirmNewPassword}
                togglePasswordVisibility={() =>
                  setShowConfirmNewPassword(!showConfirmNewPassword)
                }
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
