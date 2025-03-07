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
import { kitOrderValues, OrderResponse } from './type';

const DUMMY_PURCHASE_DATA = {
  name: '김가연',
  phoneNumber: '01023811425',
};

const DUMMY_TOKEN =
 

// 주문 상품

// 쿠폰 정보
// 쿠폰이 배열로 오는데 interface로 어떻게 정의해야하지?

export default function KitOrderPage() {
  /**
    어떤 api가 필요할지 생각해보자
    // ! 로딩스피너 나오게끔 처리합시다.
    <> 로딩 스피너 돌려야 함.
    2. order - /user/order/create
   */

  const getOrderData = async data => {
    const reqBody = [
      {
        itemId: data[0].itemId,
        itemCount: data[0].itemCount,
      },
    ];

    const res = await axiosInstance.post(
      `${API_AUTHORITY.USER}${API_ENDPOINT.ORDER.LOOK_UP}`,
      reqBody,
      {
        headers: {
          Authorization: `Bearer ${DUMMY_TOKEN}`,
        },
      }
    );

    return res;
  };

  const useOrderData = () => {
    return useMutation({
      mutationFn: getOrderData,
      onSuccess: (data: OrderResponse) => {
        console.log(data.data);
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const { mutate, isError, isPending } = useOrderData();

  // itemId => useParams의 kitId
  // itemCount => useParams의 quantity 로 교체해야 함.
  useEffect(() => {
    mutate([
      {
        itemId: 1,
        itemCount: 2,
      },
    ]);
  }, []);

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
    console.log(data);
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

  if (isPending) return <Spinner />;

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
