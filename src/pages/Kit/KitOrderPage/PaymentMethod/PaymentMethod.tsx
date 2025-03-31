import { Control, Controller } from 'react-hook-form';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { PAYMENT_METHODS } from '@/constants/paymentMethods';

import SectionContainer from '../components/SectionContainer';
import { kitOrderValues } from '../type';

interface PaymentMethodProps {
  control: Control<kitOrderValues>;
}

export default function PaymentMethod({ control }: PaymentMethodProps) {
  return (
    <SectionContainer
      label="결제 수단"
      className="p-6 mb-24">
      <Controller
        name="paymentMethod"
        control={control}
        rules={{ required: '결제 수단을 선택해주세요.' }}
        render={({ field }) => (
          <RadioGroup
            className={'gap-0'}
            defaultValue={PAYMENT_METHODS[0].id}
            onValueChange={value => field.onChange(value)}>
            {PAYMENT_METHODS.map((method, index) => (
              <label
                key={index + method.id}
                className="flex items-center h-12 gap-2 border-b-2 last:border-none hover:cursor-pointer hover:bg-slate-50 hover:rounded-md hover:px-1"
                htmlFor={method.id}>
                <RadioGroupItem
                  value={method.label}
                  id={method.id}
                />
                <span className="font-bold">{method.label}</span>
              </label>
            ))}
          </RadioGroup>
        )}
      />
    </SectionContainer>
  );
}
