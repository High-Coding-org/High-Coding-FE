import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { PAYMENT_METHODS } from '@/constants/paymentMethods';

import SectionContainer from '../components/SectionContainer';

interface PaymentMethodProps {
  setPaymentMethod: (method: string) => void;
}

export default function PaymentMethod({
  setPaymentMethod,
}: PaymentMethodProps) {
  return (
    <SectionContainer
      label="결제 수단"
      className="p-6">
      <RadioGroup
        className="gap-0"
        defaultValue={PAYMENT_METHODS[0].id}
        onValueChange={value => setPaymentMethod(value)}>
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
    </SectionContainer>
  );
}
