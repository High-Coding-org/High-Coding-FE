import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputFieldProps {
  label: string;
  name: string;
  value: number | null;
  onChange: (e) => void;
  min?: number;
  max?: number;
  step?: number;
}

export default function InputField({
  label,
  name,
  value,
  onChange,
  min,
  max,
  step,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type="number"
        name={name}
        value={value ?? ''}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        required
        className="bg-white"
      />
    </div>
  );
}
