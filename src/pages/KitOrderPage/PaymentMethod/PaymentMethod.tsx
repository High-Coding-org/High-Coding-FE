import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { PAYMENT_METHODS } from '@/constants/paymentMethods';

interface PaymentMethodProps {
  setPaymentMethod: (method: string) => void;
}

export default function PaymentMethod({
  setPaymentMethod,
}: PaymentMethodProps) {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <Label className="pl-4 font-bold">결제수단</Label>

      <div className="px-6 py-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <RadioGroup
          className="gap-0"
          defaultValue={PAYMENT_METHODS[0].id}
          onValueChange={value => setPaymentMethod(value)}>
          {PAYMENT_METHODS.map((method, index) => (
            <div
              key={index + method.id}
              className={`flex items-center h-12 gap-2 border-b-2 last:border-none`}>
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
      </div>
    </div>
  );
}
