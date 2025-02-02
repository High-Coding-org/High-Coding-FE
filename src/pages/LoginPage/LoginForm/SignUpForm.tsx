import { useEffect, useState } from 'react';
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { INVALID_FORM_STYLE, PATTERN, RULES } from '@/constants/formValidation';
import { useSignUp } from '@/hooks/api/useAuth';
import { SignUpFormData } from '@/types/auth';

import CustomFormField from '../components/CustomFormField';

export default function SignUpForm() {
  const { mutate: signUp, isError } = useSignUp();
  const [birthDate, setBirthDate] = useState<Date>();
  const form = useForm<SignUpFormData>({
    defaultValues: {
      name: '',
      id: '',
      password: '',
      passwordCheck: '',
      phonePrefix: '',
      phoneNumber: '',
      birth: undefined,
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    const { passwordCheck, ...signUpData } = data;

    const formData = {
      ...signUpData,
      phone: `${signUpData.phonePrefix}${signUpData.phoneNumber}`,
    };

    signUp(formData);
  };

  useEffect(() => {
    if (isError) {
      form.setError('id', {
        type: 'manual',
        // message: '이미 사용중인 아이디입니다',
        message: '에러 발생',
      });
    }
  }, [form, isError]);

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === 'birth') {
        setBirthDate(value.birth);
      }
    });
    return () => subscription.unsubscribe();
  }, [form, form.watch]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-full h-full gap-4 px-12">
        {/* 이름 */}
        <CustomFormField
          name="name"
          control={form.control}
          rules={RULES.NAME}
          pattern={PATTERN.NAME}
          label="이름"
          placeholder="ex) 김코딩"
        />

        {/* ID */}
        <CustomFormField
          name="id"
          control={form.control}
          rules={RULES.ID}
          pattern={PATTERN.ID}
          label="아이디"
          placeholder="ex) hiCoding123"
        />

        {/* 비밀번호 */}
        <CustomFormField
          name="password"
          control={form.control}
          rules={RULES.PASSWORD}
          pattern={PATTERN.PASSWORD}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          isPassword={true}
        />

        {/* 비밀번호 확인 */}
        <FormField
          name="passwordCheck"
          control={form.control}
          rules={{
            validate: pwd => pwd === form.watch('password'),
          }}
          render={({ field, fieldState }) => (
            <FormItem className="relative w-full">
              <FormLabel className="text-sm font-medium text-foreground">
                비밀번호 확인
              </FormLabel>
              {fieldState.invalid && (
                <p className="text-sm text-red-500 absolute right-0 -translate-y-1/2 top-[2px]">
                  (비밀번호가 동일하지 않습니다)
                </p>
              )}
              <FormControl>
                <Input
                  type="password"
                  className={fieldState.invalid ? INVALID_FORM_STYLE : ''}
                  placeholder="비밀번호를 확인해주세요."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* 전화번호 */}
        <div className="relative w-full space-y-2">
          <FormLabel className="text-sm font-medium">전화번호</FormLabel>
          <div className="flex gap-2">
            <FormField
              name="phonePrefix"
              control={form.control}
              rules={{ required: ' ' }}
              render={({ field, fieldState }) => (
                <FormItem className="flex-shrink-0">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <SelectTrigger
                      className={`w-[100px] ${
                        fieldState.invalid ? INVALID_FORM_STYLE : ''
                      }`}>
                      <SelectValue placeholder="선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="010">010</SelectItem>
                        <SelectItem value="011">011</SelectItem>
                        <SelectItem value="016">016</SelectItem>
                        <SelectItem value="017">017</SelectItem>
                        <SelectItem value="018">018</SelectItem>
                        <SelectItem value="019">019</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              name="phoneNumber"
              control={form.control}
              rules={{
                required: RULES.PHONE.required,
                pattern: PATTERN.PHONE,
              }}
              render={({ field, fieldState }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="12345678"
                      className={fieldState.invalid ? INVALID_FORM_STYLE : ''}
                    />
                  </FormControl>
                  <FormMessage className="absolute right-0 -top-1" />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* 생년월일 */}
        <FormField
          name="birth"
          control={form.control}
          rules={{ required: '(생년월일이 입력되지 않았습니다)' }}
          render={({ field, fieldState }) => (
            <FormItem className="relative w-full">
              <FormLabel className="text-sm font-medium text-foreground">
                생년월일
              </FormLabel>
              <FormMessage className="absolute right-0 -translate-y-1/2 top-[2px]" />
              <FormControl>
                <DatePicker
                  date={birthDate}
                  setDate={setBirthDate}
                  onChange={field.onChange}
                  isError={fieldState.invalid}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-[#007AFD]">
          가입하기
        </Button>
      </form>
    </Form>
  );
}
