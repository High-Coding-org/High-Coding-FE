import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import SideBar from '@/components/common/SideBar/SideBar';
import Spinner from '@/components/common/Spinner/Spinner';
import { getOrderList } from '@/services/orderList/getOrderList';

import OrderData from './OrderData';

export default function OrderList() {
  const { data: orderList, isLoading } = useQuery({
    queryKey: ['orderList'],
    queryFn: getOrderList,
  });

  useEffect(() => {
    getOrderList();
  }, []);

  return (
    <>
      <BreadcrumbAndTitle />
      <div className="flex w-[1140px] mt-2">
        <main className="flex-1">
          {isLoading ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : (
            <>
              {orderList?.map(({ orderDate, orderItemList }, idx) => {
                return (
                  <OrderData
                    key={idx}
                    orderDate={orderDate}
                    orderItemList={orderItemList}
                  />
                );
              })}
            </>
          )}
        </main>
        <aside className="w-[12rem] whitespace-nowrap sticky top-[80px] h-fit">
          <SideBar />
        </aside>
      </div>
    </>
  );
}
