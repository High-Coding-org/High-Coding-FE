import { Label } from '@/components/ui/label';
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
          <div
            key={index + method.id}
            className="flex items-center h-12 gap-2 border-b-2 last:border-none">
            <RadioGroupItem
              value={method.label}
              id={method.id}
            />
            <Label
              htmlFor={method.id}
              className="font-bold hover:cursor-pointer">
              {method.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </SectionContainer>
  );
}
