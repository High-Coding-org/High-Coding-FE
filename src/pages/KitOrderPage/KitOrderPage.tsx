import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';

import { Button } from '@/components/ui/button';

import OrderCoupon from './OrderCoupon/OrderCoupon';
import OrderItem from './OrderItem/OrderItem';
import PaymentMethod from './PaymentMethod/PaymentMethod';
import PriceInfo from './PriceInfo/PriceInfo';
import ShippingInfo from './ShippingInfo/ShippingInfo';

const DUMMY_PURCHASE_DATA = {
  name: '김가연',
  phoneNumber: '01023811425',
};

interface kitOrderValues {
  deliveryNote: string;
  regionalAddress: string;
  detailedAddress: string;
  paymentMethod: string;
}

export default function KitOrderPage() {
  const navigate = useNavigate();
  const { kitId, productName, quantity, price } = useParams();
  const totalPrice = Number(price) * Number(quantity);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<kitOrderValues>({
    defaultValues: {
      deliveryNote: '',
      regionalAddress: '',
      detailedAddress: '',
      paymentMethod: '',
    },
  });

  const onSubmit = (data: kitOrderValues) => {
    // 모든 필드가 채워졌다면 여기로 옵니다.
    console.log('제출 데이터:', data);
    // 결제 로직 진행 또는 다음 단계로 이동
  };

  // 제출 버튼을 누른 후 필드에 오류가 있으면 alert 처리
  const onError = () => {
    alert('모든 필드를 입력해 주세요.');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex justify-between h-full w-pageWidth text-[#222]">
      <div className="w-[70%]">
        <ShippingInfo
          name={DUMMY_PURCHASE_DATA.name}
          phoneNumber={DUMMY_PURCHASE_DATA.phoneNumber}
          control={control}
          errors={errors}
        />

        <OrderItem
          productName={productName!}
          quantity={Number(quantity)}
          price={Number(price)}
        />

        <OrderCoupon totalPrice={totalPrice} />

        <PaymentMethod
          control={control}
          errors={errors}
        />
      </div>

      <nav className="sticky w-[25%] flex flex-col top-14 h-fit">
        <PriceInfo
          totalPrice={totalPrice}
          discount={0}
        />
        <Button
          type="submit"
          className="bg-primary active:bg-blue-800">
          결제하기
        </Button>
      </nav>
    </form>
  );
}
