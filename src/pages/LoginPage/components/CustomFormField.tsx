import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Control, RegisterOptions } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { INVALID_FORM_STYLE } from '@/constants/formValidation';
import { SignUpFormData } from '@/types/auth/auth';

type Pattern = {
  value: RegExp;
  message: string;
};

interface CustomFormFieldProps {
  name: keyof SignUpFormData;
  control: Control<SignUpFormData>;
  rules: RegisterOptions<SignUpFormData>;
  pattern?: Pattern;
  label: string;
  placeholder: string;
  isPassword?: boolean;
}

export default function CustomFormField({
  name,
  control,
  rules,
  pattern,
  label,
  placeholder,
  isPassword = false,
}: CustomFormFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormField
      name={name}
      control={control}
      rules={{
        ...rules,
        pattern: {
          value: pattern?.value || /./,
          message: pattern?.message || '',
        },
      }}
      render={({ field, fieldState }) => (
        <FormItem className="relative w-full">
          <FormLabel className="text-sm font-medium text-foreground">
            {label}
          </FormLabel>
          <FormMessage className="absolute right-0 -translate-y-1/2 top-[2px]" />
          <FormControl>
            <Input
              type={isPassword ? (showPassword ? 'text' : 'password') : 'text'}
              className={fieldState.invalid ? INVALID_FORM_STYLE : ''}
              placeholder={placeholder}
              {...field}
              value={field.value?.toString() || ''}
            />
          </FormControl>
          {isPassword && (
            <div
              className="absolute text-gray-500 cursor-pointer right-2 bottom-1"
              onClick={() => setShowPassword(prev => !prev)}>
              {showPassword ? <EyeOff /> : <Eye />}
            </div>
          )}
        </FormItem>
      )}
    />
  );
}
