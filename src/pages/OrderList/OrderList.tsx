import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import SideBar from '@/components/common/SideBar';
import Spinner from '@/components/common/Spinner/Spinner';
import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { API_AUTHORITY, API_ENDPOINT } from '@/services/apiEndpoint';
import { axiosInstance } from '@/services/axiosInstance';

import OrderData from './OrderData';
import { OrderListResponse } from './type';

// ! 공통 컴포넌트 - SideBar 변경 후 더미데이터 제거 예정
const DUMMY_SIDEBAR_DATA = [
  { name: '프로필', url: '/profile' },
  { name: '회원 정보 수정', url: '/profile/edit' },
  { name: '로그아웃', url: '/logout' },
  { name: '프로필', url: '/profile' },
  { name: '회원 정보 수정', url: '/profile/edit' },
  { name: '로그아웃', url: '/logout' },
  { name: '프로필', url: '/profile' },
];

export default function OrderList() {
  const navigate = useNavigate();

  const getOrderList = async () => {
    const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

    const res: OrderListResponse = await axiosInstance.get(
      `${API_AUTHORITY.USER}${API_ENDPOINT.ORDER.ORDER_LIST}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res?.data;
  };

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
      <div className="flex w-[1140px] border-2">
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
          <SideBar menuItems={DUMMY_SIDEBAR_DATA} />
        </aside>
      </div>
    </>
  );
}
