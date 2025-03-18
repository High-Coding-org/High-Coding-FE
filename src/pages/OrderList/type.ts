import { AxiosResponse } from 'axios';

interface IOrderItemListData {
  itemCount: number;
  itemId: number;
  itemName: string;
  totalPrice: number;
}

export interface IOrderData {
  orderDate: string;
  orderItemList: IOrderItemListData[];
}

export type OrderListResponse = AxiosResponse<IOrderData[]>;
