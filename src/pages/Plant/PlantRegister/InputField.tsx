import { forwardRef } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputFieldProps {
  id: string;
  label: string;
  type: 'text' | 'number';
  step?: number;
  min?: number | string;
  max?: number | string;
  error?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, label, type, step, min, max, error, ...props }, ref) => {
    return (
      <div className="flex-1">
        <Label
          htmlFor={id}
          className="text-sm font-medium">
          {label}
        </Label>
        <Input
          id={id}
          type={type}
          step={step}
          min={min}
          max={max}
          className={`mt-1 ${error ? 'border-red-500' : ''}`}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
