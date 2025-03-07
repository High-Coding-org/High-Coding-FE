import { AxiosResponse } from 'axios';

import { UserInfo } from '@/types/userInfo';

export interface kitOrderValues {
  deliveryNote: string;
  regionalAddress: string;
  detailedAddress: string;
  paymentMethod: string;
}

interface IOrderItems {
  itemCount: number;
  itemId: number;
  itemName: string;
  totalPrice: number;
}

interface IOrderCoupon {
  couponId: number;
  couponPublishId: number;
  couponName: string;
  discountAmount: number;
  status: string;
}

interface OrderResponseData {
  userInfo: Pick<UserInfo, 'username' | 'name' | 'phoneNumber'>;
  orderItems: IOrderItems[];
  coupons: IOrderCoupon[];
}

// Axios 응답 전체를 포함하는 타입
export type OrderResponse = AxiosResponse<OrderResponseData>;
