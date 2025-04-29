import { useNavigate } from 'react-router';

import { Button } from '@/components/ui/button';
import { PATH } from '@/routes/path';
import { formatOrderDate } from '@/utils/formatDate';

import { IOrderData } from './type';

export default function OrderData({ orderDate, orderItemList }: IOrderData) {
  const orderItem = orderItemList[0];
  const navigate = useNavigate();

  const onClickRegisterButton = () => {
    navigator.clipboard
      .writeText(orderItem.sn)
      .then(() => {
        alert(
          '시리얼 넘버가 복사되었습니다. \n회원 정보 페이지에서 시리얼 넘버를 등록해주세요.'
        );
        navigate(PATH.PROFILE);
      })
      .catch(() => {
        alert('복사에 실패했습니다. 다시 시도해주세요.');
      });
  };

  return (
    <section className="w-[750px] h-[180px]  mb-8 bg-white border border-gray-200 rounded-lg shadow-md p-4">
      <h3 className="mb-4 text-xl font-bold">
        {formatOrderDate(orderDate)} 주문
      </h3>

      <div className="relative flex">
        <img
          src=""
          alt="Kit-Image"
          className="w-[100px] h-[100px] border-2"
        />
        <div className="flex flex-col justify-around mb-4 ml-6">
          <span className="text-lg font-bold">{orderItem.itemName}</span>
          <span className="text-gray-700">
            {orderItem.totalPrice / orderItem.itemCount} 원 ·{' '}
            {orderItem.itemCount}개
          </span>
        </div>
        <Button
          className="absolute bottom-0 right-0 bg-opacity-90"
          onClick={onClickRegisterButton}>
          시리얼 넘버 등록 &rarr;
        </Button>
      </div>
    </section>
  );
}
