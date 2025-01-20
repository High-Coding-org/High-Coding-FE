interface PurchaseItems {
  id: number;
  productName: string;
  quantity: number;
  paymentTime: string;
}

interface MenuItem {
  name: string;
  url: string;
}

export interface PurchaseHistoryPageProps {
  menuItems: MenuItem[];
  purchaseItems: PurchaseItems[];
}
