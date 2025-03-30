import { formatPhoneNumber } from '@/utils/formatPhoneNumber';

interface ShippingUserProps {
  name: string;
  phoneNumber: string;
}

export default function ShippingUser({ name, phoneNumber }: ShippingUserProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-bold">{name}</span>
      <span className="text-sm text-gray-500">
        {formatPhoneNumber(phoneNumber)}
      </span>
    </div>
  );
}
