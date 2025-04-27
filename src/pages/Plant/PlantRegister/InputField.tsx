import { forwardRef } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputFieldProps {
  id: string;
  label: string;
  type: 'text' | 'number';
  step?: number;
  min: number | string;
  max: number | string;
  error?: string;
  required?: boolean;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, label, type, step, min, max, error, required, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <Label
          htmlFor={id}
          className="text-sm font-medium">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </Label>
        <Input
          id={id}
          type={type}
          step={step}
          min={min}
          max={max}
          className={error ? 'border-red-500' : ''}
          ref={ref}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
