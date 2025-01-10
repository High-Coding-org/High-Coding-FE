import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ChangeEvent } from 'react';

interface FieldInputProps {
  field: {
    name: string;
    label: string;
    placeholder?: string;
    type: string;
  };
  value: string;
  disabled: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * FieldInput 컴포넌트
 * 입력 필드와 라벨을 포함한 UI를 렌더링합니다.
 */
export default function FieldInput({
  field,
  value,
  disabled,
  onChange,
}: FieldInputProps) {
  return (
    <div className="grid w-auto gap-1.5">
      <Label htmlFor={field.name}>{field.label}</Label>
      <Input
        id={field.name}
        name={field.name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={field.placeholder || ''}
        type={field.type}
      />
    </div>
  );
}
