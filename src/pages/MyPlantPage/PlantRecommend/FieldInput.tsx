import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface FieldInputProps {
  label: string;
  id: string;
  min?: number;
  max?: number;
  step?: number;
}

export default function FieldInput({
  label,
  id,
  min,
  max,
  step,
}: FieldInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        type="number"
        id={id}
        min={min}
        max={max}
        step={step}
        className="bg-white"
      />
    </div>
  );
}
