import { FieldValues, ControllerRenderProps } from 'react-hook-form';

import { Eye, EyeClosed } from 'lucide-react';

interface PasswordInputProps {
  showPassword: boolean;
  togglePasswordVisibility: () => void;
  field: ControllerRenderProps<FieldValues, string>;
}

export default function PasswordInput({
  showPassword,
  togglePasswordVisibility,
  field,
}: PasswordInputProps) {
  return (
    <div className="relative flex items-centers border border-gray-200 h-9 px-3 py-1 rounded-md w-full focus-within:border-blue-500 focus-within:border-2">
      <input
        className="text-sm w-[90%] outline-none placeholder:text-muted-foreground"
        type={showPassword ? 'text' : 'password'}
        placeholder="비밀번호를 입력해주세요."
        {...field}
      />
      <div
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-1.7 cursor-pointer">
        {showPassword ? (
          <Eye className="w-4 text-gray-400" />
        ) : (
          <EyeClosed className="w-4 text-gray-400" />
        )}
      </div>
    </div>
  );
}
