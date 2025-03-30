interface PurchaseItems {
  id: number;
  productName: string;
  quantity: number;
  paymentTime: string;
}

export interface PurchaseHistoryPageProps {
  purchaseItems: PurchaseItems[];
}
