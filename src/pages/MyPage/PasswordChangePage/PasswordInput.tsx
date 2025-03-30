import { Eye, EyeClosed } from 'lucide-react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

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
    <div className="relative flex w-full px-3 py-1 border border-gray-200 rounded-md items-centers h-9 focus-within:border-blue-500 focus-within:border-2">
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
