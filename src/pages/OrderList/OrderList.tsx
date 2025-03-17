import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import SideBar from '@/components/common/SideBar';
import Spinner from '@/components/common/Spinner/Spinner';
import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { PATH } from '@/routes/path';
import { API_AUTHORITY, API_ENDPOINT } from '@/services/apiEndpoint';
import { axiosInstance } from '@/services/axiosInstance';

import OrderData from './OrderData';

interface IOrderItemListData {
  itemCount: number;
  itemId: number;
  itemName: string;
  totalPrice: number;
}

interface IOrderListData {
  orderAmount: number;
  orderDate: string;
  orderId: number;
  orderItemList: IOrderItemListData[];
}

type OrderListResponse = AxiosResponse<IOrderListData[]>;

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
    try {
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
    } catch (error) {
      if (error) {
        alert('주문 목록을 불러오는데 실패했습니다.');
        navigate(PATH.PROFILE);
      }
    }
  };

  const { data: orderList, isLoading } = useQuery({
    queryKey: ['orderList'],
    queryFn: getOrderList,
  });

  useEffect(() => {
    getOrderList();
  }, []);

  /**
    구조의 경우, pr에 올라온 프로필 페이지

    네모 규격: w: 750, h: 150
    네모 디자인의 경우, orderPage 참고.
   */

  return (
    <>
      <BreadcrumbAndTitle />
      {/* <div className="w-full max-w-[1140px] flex justify-between gap-16 mt-2 p-4"> */}
      <div className="flex w-[1140px] border-2 border-red-500">
        <main className="flex-1">
          {isLoading ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : (
            <>
              {orderList?.map((data, idx) => {
                return <OrderData key={idx} />;
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
