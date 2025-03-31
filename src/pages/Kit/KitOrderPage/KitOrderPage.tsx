import { useEffect, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import Spinner from '@/components/common/Spinner/Spinner';
import { Button } from '@/components/ui/button';
import { useOrderData, useOrderPurchase } from '@/hooks/api/useOrder';
import { PATH } from '@/routes/path';

import { SUBMIT_ERROR_MESSAGE } from './constants/submitErrorMessage';
import OrderCoupon from './OrderCoupon/OrderCoupon';
import OrderItem from './OrderItem/OrderItem';
import PaymentMethod from './PaymentMethod/PaymentMethod';
import PriceInfo from './PriceInfo/PriceInfo';
import ShippingInfo from './ShippingInfo/ShippingInfo';
import { kitOrderValues, OrderResponseData } from './type';

export default function KitOrderPage() {
  const navigate = useNavigate();
  const { kitId, quantity } = useParams();
  const [discount, setDiscount] = useState<number>(0);
  const [orderData, setOrderData] = useState<OrderResponseData>();
  const [appliedCouponID, setAppliedCouponID] = useState<number | null>(null);

  const {
    mutate: mutateOrder,
    isError: isOrderDataError,
    isPending: isOrderDataPending,
    data: mutateOrderData,
  } = useOrderData();
  const {
    mutate: mutateOrderPurchase,
    isError: isOrderPurchaseError,
    isPending: isOrderPurchasePending,
  } = useOrderPurchase();

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

  const onPurchase = (data: kitOrderValues) => {
    mutateOrderPurchase({
      orderItems: [
        {
          itemId: Number(kitId),
          itemCount: Number(quantity),
        },
      ],
      receiverName: orderData?.userInfo.name,
      receiverPhone: orderData?.userInfo.phoneNumber,
      deliveryAddress: data.regionalAddress + ' ' + data.detailedAddress,
      orderNote: data.deliveryNote,
      couponPublishId: appliedCouponID,
    });
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

  useEffect(() => {
    if (isOrderDataError || isOrderPurchaseError) {
      alert('주문 데이터를 불러오는데 실패했습니다.');
      navigate(PATH.HOME);
    }
  }, [isOrderDataError, isOrderPurchaseError, navigate]);

  useEffect(() => {
    if (!mutateOrderData) return;

    setOrderData(mutateOrderData?.data);
  }, [mutateOrderData]);

  useEffect(() => {
    mutateOrder([
      {
        itemId: Number(kitId),
        itemCount: Number(quantity),
      },
    ]);
  }, []);

  if (isOrderDataPending || !orderData) return <Spinner />;

  return (
    <>
      <BreadcrumbAndTitle />

      <form
        onSubmit={handleSubmit(onPurchase, onError)}
        className="flex justify-between h-full w-pageWidth text-[#222]">
        <main className="w-[70%]">
          <ShippingInfo
            name={orderData?.userInfo.name}
            phoneNumber={orderData?.userInfo.phoneNumber}
            control={control}
            errors={errors}
          />

          <OrderItem
            productName={orderData?.orderItems[0].itemName}
            quantity={orderData?.orderItems[0].itemCount}
            price={orderData?.orderItems[0].totalPrice}
          />

          <OrderCoupon
            totalPrice={orderData?.orderItems[0].totalPrice}
            discount={discount}
            setDiscount={setDiscount}
            coupons={orderData?.coupons}
            setAppliedCouponID={setAppliedCouponID}
          />

          <PaymentMethod control={control} />
        </main>

        <aside className="sticky w-[25%] flex flex-col top-14 h-fit">
          <PriceInfo
            totalPrice={orderData?.orderItems[0].totalPrice}
            discount={discount}
          />
          <Button
            type="submit"
            className=" bg-primary active:bg-blue-800">
            {isOrderPurchasePending ? (
              <Spinner className="absolute bottom-2" />
            ) : (
              '결제하기'
            )}
          </Button>
        </aside>
      </form>
    </>
  );
}
