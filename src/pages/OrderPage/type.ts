interface OrderItem {
  productName: string;
  price: number;
  quantity: number;
}

interface PurchaseData {
  name: string;
  phoneNumber: string;
  shippingAddress: string;
  discount: number;
  shippingFee: number;
}

interface Coupon {
  name: string;
  discountPercent: number;
  discount: number;
}

export interface OrderProps {
  purchaseData: PurchaseData;
  orderItems: OrderItem;
  coupons: Coupon[];
  addresses: string[];
}
