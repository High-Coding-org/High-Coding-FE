import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  onChange?: (e) => void;
}

export default function InputField({
  id,
  label,
  type,
  min,
  max,
  step,
  required = false,
  onChange,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        min={min}
        max={max}
        step={step}
        required={required}
        onChange={onChange}
      />
    </div>
  );
}
