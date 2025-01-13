import { Button } from '@/components/ui/button';
import SideBar from '@/components/common/SideBar';

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

interface PurchaseHistoryPageProps {
  menuItems: MenuItem[];
  purchaseItems: PurchaseItems[];
}

/**
 * PurchaseHistoryPage 컴포넌트
 * 구매 내역과 사이드바를 렌더링합니다.
 *
 * @param {PurchaseHistoryPageProps} props - 메뉴 항목과 구매 항목을 포함한 props입니다.
 * @returns {JSX.Element} 구매 내역과 사이드바를 렌더링하는 컴포넌트입니다.
 */
export default function PurchaseHistory({
  menuItems,
  purchaseItems,
}: PurchaseHistoryPageProps) {
  return (
    <div>
      <div className="flex justify-between whitespace-nowrap">
        <div className="mr-[5%] w-[75%]">
          {purchaseItems.map(item => (
            <div
              key={item.id}
              className="flex justify-between items-center w-full bg-white shadow-md rounded-lg border border-gray-200 p-10 mb-4">
              <div>
                <p className="text-xs text-gray-500">{item.paymentTime}</p>
                <h3 className="text-base font-semibold">{item.productName}</h3>
                <p className="text-sm">{item.quantity}개</p>
              </div>
              <Button className=" bg-[#007AFD] hover:bg-[#0063CD]">
                리뷰 쓰기
              </Button>
            </div>
          ))}
        </div>
        <div className="h-auto w-[12rem]">
          <SideBar menuItems={menuItems} />
        </div>
      </div>
    </div>
  );
}
