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
import { SignUpFormData } from '@/types/auth';

import CustomFormField from '../components/CustomFormField';

export default function SignUpForm() {
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

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === 'birth') {
        setBirthDate(value.birth);
      }
    });
    return () => subscription.unsubscribe();
  }, [form, form.watch]);

  const onSubmit = (data: SignUpFormData) => {
    const formData = {
      ...data,
      phone: `${data.phonePrefix}${data.phoneNumber}`,
    };
    console.log(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-full h-full gap-4 px-12">
        {/* 이름 */}
        <CustomFormField
          name="name"
          control={form.control}
          rules={{ required: '(이름이 입력되지 않았습니다)' }}
          label="이름"
          placeholder="ex) 김코딩"
        />

        {/* ID */}
        <CustomFormField
          name="id"
          control={form.control}
          rules={{ required: '(아이디가 입력되지 않았습니다)' }}
          label="아이디"
          placeholder="ex) hiCoding123"
        />

        {/* 비밀번호 */}
        <CustomFormField
          name="password"
          control={form.control}
          rules={{ required: '(비밀번호가 입력되지 않았습니다)' }}
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
              <FormLabel className="text-sm font-medium">
                비밀번호 확인
              </FormLabel>
              {fieldState.invalid && (
                <p className="text-sm text-red-500 absolute right-0 -translate-y-1/2 top-[2px]">
                  (입력된 비밀번호가 동일하지 않습니다)
                </p>
              )}
              <FormControl>
                <Input
                  type="password"
                  className={`${fieldState.invalid ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
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
                        fieldState.invalid
                          ? 'border-red-500 focus-visible:ring-red-500'
                          : ''
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
                required: '(전화번호가 입력되지 않았습니다)',
                pattern: {
                  value: /^\d{7,8}$/,
                  message: '숫자 7~8자리를 입력해주세요',
                },
              }}
              render={({ field, fieldState }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="12345678"
                      className={
                        fieldState.invalid
                          ? 'border-red-500 focus-visible:ring-red-500'
                          : ''
                      }
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
          render={({ field }) => (
            <FormItem className="relative w-full">
              <FormLabel className="text-sm font-medium">생년월일</FormLabel>
              <FormMessage className="absolute right-0 -translate-y-1/2 top-[2px]" />
              <FormControl>
                <DatePicker
                  date={birthDate}
                  setDate={setBirthDate}
                  onChange={field.onChange}
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
