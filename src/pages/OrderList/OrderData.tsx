import { formatOrderDate } from '@/utils/formatDate';

import { IOrderData } from './type';

export default function OrderData({ orderDate, orderItemList }: IOrderData) {
  return (
    <section className="w-[750px] h-[180px]  mb-8 bg-white border border-gray-200 rounded-lg shadow-md p-4">
      <h3 className="mb-4 text-xl font-bold">
        {formatOrderDate(orderDate)} 주문
      </h3>

      <div className="flex">
        <img
          src=""
          alt="Kit-Image"
          className="w-[100px] h-[100px] border-2"
        />
        <div className="flex flex-col justify-around mb-4 ml-6">
          <span className="text-lg font-bold">{orderItemList[0].itemName}</span>
          <span className="text-gray-700">
            {orderItemList[0].totalPrice / orderItemList[0].itemCount} 원 ·{' '}
            {orderItemList[0].itemCount}개
          </span>
        </div>
      </div>
    </section>
  );
}
