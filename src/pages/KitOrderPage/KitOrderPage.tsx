import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import Spinner from '@/components/common/Spinner/Spinner';
import { Button } from '@/components/ui/button';
import { API_AUTHORITY, API_ENDPOINT } from '@/services/apiEndpoint';
import { axiosInstance } from '@/services/axiosInstance';

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

const DUMMY_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnaFRlc3QiLCJpYXQiOjE3NDEzNDQxNTUsImV4cCI6MTc0MTQzMDU1NX0.gkLKCFfnHy3tTaBGxoZPyLbCf3ekhivq42rG_-56gr0';

export default function KitOrderPage() {
  const postOrderPurchase = async ({
    orderItems,
    receiverName,
    receiverPhone,
    deliveryAddress,
    orderNote,
    couponPublishId,
  }) => {
    const reqBody = {
      orderItems,
      receiverName,
      receiverPhone,
      deliveryAddress,
      orderNote,
    };

    const res = await axiosInstance.post(
      `${API_AUTHORITY.USER}${API_ENDPOINT.ORDER.CREATE}?couponPublishId=${couponPublishId}`,
      reqBody,
      {
        headers: {
          Authorization: `Bearer ${DUMMY_TOKEN}`,
        },
      }
    );

    return res;
  };

  const useOrderPurchase = () => {
    return useMutation({
      mutationFn: postOrderPurchase,
      onSuccess: data => {
        console.log(data);
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const {
    mutate: mutateOrderPurchase,
    isError: isOrderPurchaseError,
    isPending: isOrderPurchasePending,
  } = useOrderPurchase();

  /* ------------------------------------------------------------ */

  const navigate = useNavigate();
  const { kitId, productName, quantity, price } = useParams();
  const [discount, setDiscount] = useState<number>(0);
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
  const {
    mutate: mutateOrder,
    isError: isOrderDataError,
    isPending: isOrderDataPending,
  } = useOrderData();

  const totalPrice = Number(price) * Number(quantity);

  const onSubmit = (data: kitOrderValues) => {
    // deliveryNote : "배송 전에 미리 연락 바랍니다."
    // detailedAddress : "1"
    // paymentMethod : "일반 결제"
    // regionalAddress : "충북 청주시 서원구 1순환로 627 (사창동, 청주 센트럴 리슈빌DS)"
    // mutateOrderPurchase(data);
    mutateOrderPurchase({
      orderItems: [
        {
          itemId: 1,
          itemCount: 3,
        },
      ],
      receiverName: 'test-ghTest',
      receiverPhone: '01043211234',
      deliveryAddress: 'test-서울특별시 강남구 테헤란로 14길 6 남도빌딩 2층',
      orderNote: 'test-주문 메모',
      couponPublishId: 2,
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
    mutateOrder([
      {
        itemId: Number(kitId),
        itemCount: Number(quantity),
      },
    ]);
  }, []);

  if (isOrderDataPending) return <Spinner />;

  return (
    <>
      <BreadcrumbAndTitle />

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
    </>
  );
}
