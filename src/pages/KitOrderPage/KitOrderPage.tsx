import { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';

import { Button } from '@/components/ui/button';

import { SUBMIT_ERROR_MESSAGE } from './constants/submitErrorMessage';
import OrderCoupon from './OrderCoupon/OrderCoupon';
import OrderItem from './OrderItem/OrderItem';
import PaymentMethod from './PaymentMethod/PaymentMethod';
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
      regionalAddress: '',
      detailedAddress: '',
      deliveryNote: '',
      paymentMethod: '',
    },
  });
  const [discount, setDiscount] = useState<number>(0);
  const totalPrice = Number(price) * Number(quantity);

  const onSubmit = (data: kitOrderValues) => {
    console.log('제출 데이터:', data);
  };

  const onError = (errors: FieldErrors<kitOrderValues>) => {
    const shippingInfoErrors =
      errors.deliveryNote || errors.regionalAddress || errors.detailedAddress;

    alert(
      shippingInfoErrors
        ? SUBMIT_ERROR_MESSAGE.SHIPPING_INFO
        : SUBMIT_ERROR_MESSAGE.PAYMENT_METHOD
    );
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

        <PaymentMethod control={control} />
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
