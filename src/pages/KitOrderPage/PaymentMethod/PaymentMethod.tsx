import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { PAYMENT_METHODS } from '@/constants/paymentMethods';

export default function PaymentMethod() {
  return (
    <section className="flex flex-col gap-4 mb-6">
      <Label className="pl-4 font-bold">결제수단</Label>
      <div className="px-6 py-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <RadioGroup defaultValue="option-one">
          {PAYMENT_METHODS.map((method, index) => (
            <div key={method.id}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value={method.id}
                  id={method.id}
                />
                <Label
                  htmlFor={method.id}
                  className="font-bold">
                  {method.label}
                </Label>
              </div>
              {index < PAYMENT_METHODS.length - 1 && <hr className="my-3" />}
            </div>
          ))}
        </RadioGroup>
      </div>
    </section>
  );
}
