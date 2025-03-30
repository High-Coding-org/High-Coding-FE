import { Control } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import PasswordInput from './PasswordInput';

interface PasswordFormFieldProps {
  control: Control;
  name: string;
  label: string;
  showPassword: boolean;
  togglePasswordVisibility: () => void;
}

export default function PasswordFormField({
  control,
  name,
  label,
  showPassword,
  togglePasswordVisibility,
}: PasswordFormFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col border-b-[1px] border-gray-200 py-2 md:flex-row">
          <FormLabel className="w-32 px-2 pt-4 text-sm text-gray-600">
            {label}
          </FormLabel>
          <div className="flex flex-col w-[24rem] gap-2 pb-2">
            <FormControl>
              <PasswordInput
                showPassword={showPassword}
                togglePasswordVisibility={togglePasswordVisibility}
                field={field}
              />
            </FormControl>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}
