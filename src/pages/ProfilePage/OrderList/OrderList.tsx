import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useEffect } from 'react';

import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/localStorageKey';
import { API_AUTHORITY, API_ENDPOINT } from '@/services/apiEndpoint';
import { axiosInstance } from '@/services/axiosInstance';

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
];

export default function OrderList() {
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

    return res.data;
  };

  const { data: orderList } = useQuery({
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

  return <></>;
}
