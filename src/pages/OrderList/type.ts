import { AxiosResponse } from 'axios';

interface IOrderItemListData {
  itemCount: number;
  itemId: number;
  itemName: string;
  totalPrice: number;
}

export interface IOrderData {
  orderAmount: number;
  orderDate: string;
  orderId: number;
  orderItemList: IOrderItemListData[];
}

export type OrderListResponse = AxiosResponse<IOrderData[]>;
