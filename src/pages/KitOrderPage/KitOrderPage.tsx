import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';

import { Button } from '@/components/ui/button';

import OrderCoupon from './OrderCoupon/OrderCoupon';
import OrderItem from './OrderItem/OrderItem';
import PriceInfo from './PriceInfo/PriceInfo';
import ShippingInfo from './ShippingInfo/ShippingInfo';
import { kitOrderValues } from './type';

const DUMMY_PURCHASE_DATA = {
  name: '김가연',
  phoneNumber: '01023811425',
};

export default function KitOrderPage() {
  const navigate = useNavigate();
  const { kitId, productName, quantity, price } = useParams();
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
  const [discount, setDiscount] = useState<number>(0);
  const totalPrice = Number(price) * Number(quantity);

  const onSubmit = (data: kitOrderValues) => {
    console.log('제출 데이터:', data);
  };

  const onError = () => {
    alert('모든 필드를 입력해 주세요.');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex justify-between h-full w-pageWidth text-[#222]">
      <main className="w-[70%]">
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

        <OrderCoupon
          totalPrice={totalPrice}
          discount={discount}
          setDiscount={setDiscount}
        />

        {/* <PaymentMethod
          control={control}
          errors={errors}
        /> */}
      </main>

      <aside className="sticky w-[25%] flex flex-col top-14 h-fit">
        <PriceInfo
          totalPrice={totalPrice}
          discount={0}
        />
        <Button
          type="submit"
          className="bg-primary active:bg-blue-800">
          결제하기
        </Button>
      </aside>
    </form>
  );
}
