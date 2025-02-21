import { z } from 'zod';
export const formSchema = z
  .object({
    currentPassword: z.string().min(6, {
      message: '6자리 이상 작성해주세요.',
    }),
    newPassword: z.string().min(6, {
      message: '6자리 이상 작성해주세요.',
    }),
    confirmNewPassword: z.string(),
  })
  .refine(data => data.newPassword !== data.currentPassword, {
    message: '기존 비밀번호와 새 비밀번호가 같습니다.',
    path: ['newPassword'],
  })
  .refine(data => data.newPassword === data.confirmNewPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmNewPassword'],
  });
