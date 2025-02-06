import { Plus, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DELIVERY_NOTES } from '@/constants/deliveryNotes';
import { PAYMENT_METHODS } from '@/constants/paymentMethods';
import { PATH } from '@/routes/path';

const purchaseData = {
  name: '김가연',
  phoneNumber: '01023811425',
  shippingAddress: '경상북도 상주시 경상대로 2559',
  discount: 0,
  shippingFee: 3000,
};
const orderItems = {
  productName: '스마트팜',
  price: 200000,
  quantity: 2,
};
const coupons = [
  { name: '10% 할인 쿠폰', discountPercent: 10, discount: 20000 },
  { name: '배송비 무료 쿠폰', discountPercent: 20, discount: 3000 },
  { name: '5,000원 할인 쿠폰', discountPercent: 30, discount: 5000 },
];
const addresses = [
  '경상북도 상주시 경상대로 2559',
  '서울특별시 강남구 테헤란로 123',
  '부산광역시 해운대구 해운대로 456',
];

export default function Order() {
  // 페이지가 로드될 때 location.state 값이 없다면, home으로 redirect
  const location = useLocation();
  const { kitId, productName, quantity, price } = location.state;
  const navigate = useNavigate();

  //상태 관리
  const [data, setData] = useState({ ...purchaseData });
  const [isAddressModalOpen, setIsAddressModalOpen] = useState<boolean>(false);
  const [isCouponModalOpen, setIsCouponModalOpen] = useState<boolean>(false);
  const [selectedCoupon, setSelectedCoupon] = useState<string>('');
  const [selectedAddress, setSelectedAddress] = useState<string>(
    data.shippingAddress
  );

  //모달 열기/닫기 함수
  const openCouponModal = () => setIsCouponModalOpen(true);
  const closeCouponModal = () => setIsCouponModalOpen(false);
  const openAddressModal = () => setIsAddressModalOpen(true);
  const closeAddressModal = () => setIsAddressModalOpen(false);

  //할인 선택 처리 함수
  const handleDiscountSelect = discountValue => {
    setData(prevData => ({
      ...prevData,
      discount: discountValue,
    }));
    setIsCouponModalOpen(false);
  };

  //쿠폰 선택 처리 함수
  const handleRadioGroupItemClick = couponName => {
    const selected = coupons.find(coupon => coupon.name === couponName);
    if (selected) {
      setSelectedCoupon(couponName);
      handleDiscountSelect(selected.discount);
    }
  };

  //결제 금액 계산
  const totalProductPrice = orderItems.price * orderItems.quantity;

  //배송지 선택 처리 함수
  const handleAddressSelect = address => {
    setSelectedAddress(address);
    setData(prevData => ({
      ...prevData,
      shippingAddress: address,
    }));
    setIsAddressModalOpen(false);
  };

  // 결제 금액 계산
  const totalPayment = totalProductPrice + data.shippingFee - data.discount;

  useEffect(() => {
    if (location && !location.state) {
      // ? error store 하나 추가해서 홈으로 리다이렉트 + toast 에러 띄우기 구현 예정
      navigate(PATH.HOME);
    }
  }, [location, location.state, navigate]);

  return (
    <>
      <div className="w-24 h-12">브레드크럼 들어갈 자리</div>
      <Breadcrumb />
      <main className="relative flex justify-between border-2 border-red-500 w-pageWidth">
        {/* 결제 정보 */}

        <div className="w-[70%] whitespace-nowrap">
          {/* 배송지 */}
          <section className="flex flex-col gap-4 mb-6">
            <Label className="pl-4 font-bold">배송지</Label>
            <div className="flex flex-col gap-2 px-6 py-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <div className="flex items-center justify-between h-10">
                <div>
                  <div className="mb-1 font-bold">{data.name}</div>
                  <div className="text-xs text-gray-500">
                    {data.phoneNumber}
                  </div>
                </div>
                <Button
                  onClick={openAddressModal}
                  className="text-black bg-white border border-gray-200 cursor-pointer hover:bg-white">
                  배송지 변경
                </Button>
              </div>

              <div className="mb-2">{data.shippingAddress}</div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="배송 메모를 선택해주세요." />
                </SelectTrigger>
                <SelectContent>
                  {DELIVERY_NOTES.map((note, index) => (
                    <SelectItem
                      key={index}
                      value={note.value}>
                      {note.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </section>

          {/* 주문상품 */}
          <section className="flex flex-col gap-4 mb-6">
            <Label className="pl-4 font-bold">주문상품</Label>

            <div>
              <div className="px-6 py-6 mb-4 bg-white border border-gray-200 rounded-lg shadow-md">
                <p className="text-xs text-gray-500">{orderItems.price}원</p>
                <h3 className="text-base font-bold">
                  {orderItems.productName}
                </h3>
                <p className="text-sm">{orderItems.quantity}개</p>
              </div>
            </div>
          </section>

          {/* 할인 */}
          <section className="flex flex-col gap-4 mb-6 font-bold">
            <div>
              <div className="flex items-center justify-between px-6 py-4 border-t border-l border-r rounded-t-lg">
                <div>
                  할인/쿠폰
                  <Button
                    className="ml-5 text-black bg-white border border-gray-200 hover:bg-white"
                    onClick={openCouponModal}>
                    변경
                  </Button>
                </div>
                -{data.discount.toLocaleString()}원
              </div>
              <div className="flex justify-between px-6 py-6 bg-blue-100 border-b border-l border-r border-gray-200 rounded-b-lg">
                <span>총 주문 금액:</span> {totalPayment.toLocaleString()}원
              </div>
            </div>
          </section>

          {/* 결제수단 */}
          <section className="flex flex-col gap-4 mb-6">
            <Label className="pl-4 font-bold">결제수단</Label>
            <div className="px-6 py-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <RadioGroup defaultValue="option-one">
                {PAYMENT_METHODS.map((method, index) => (
                  <div key={method.id}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={method.id}
                        id={method.id}
                      />
                      <Label
                        htmlFor={method.id}
                        className="font-bold">
                        {method.label}
                      </Label>
                    </div>
                    {index < PAYMENT_METHODS.length - 1 && (
                      <hr className="my-2" />
                    )}
                  </div>
                ))}
              </RadioGroup>
            </div>
          </section>

          {/* 쿠폰 리스트 모달 */}
          {isCouponModalOpen && (
            <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-between mb-4 items center">
                  <h2 className="mb-4 text-lg font-bold">쿠폰 사용</h2>
                  <X
                    onClick={closeCouponModal}
                    className="cursor-pointer hover:text-gray-500"
                  />
                </div>
                <ul>
                  <RadioGroup>
                    {coupons.map((coupon, index) => (
                      <li
                        key={index}
                        onClick={() => handleRadioGroupItemClick(coupon.name)}
                        className="w-64 p-4 mb-2 border border-gray-200 rounded-lg cursor-pointer">
                        <div className="flex items-center gap-2">
                          <RadioGroupItem
                            key={index}
                            value={coupon.name}
                            checked={selectedCoupon === coupon.name}
                            onClick={() =>
                              handleRadioGroupItemClick(coupon.name)
                            }
                          />
                          <span className="font-bold">{coupon.discount}원</span>{' '}
                        </div>
                        <hr className="my-2" /> {coupon.name}
                      </li>
                    ))}
                  </RadioGroup>
                </ul>
              </div>
            </section>
          )}
          {/* 배송지 변경 모달 */}
          {isAddressModalOpen && (
            <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-between mb-4 item-center">
                  <h2 className="mb-4 text-lg font-bold">배송지 변경</h2>
                  <X
                    onClick={closeAddressModal}
                    className="cursor-pointer hover:text-gray-500"
                  />
                </div>
                <div>
                  <div>
                    <div className="flex gap-2 p-4 mb-2 font-bold border border-gray-200 rounded-lg cursor-pointer item-center">
                      <span className="flex items-center gap-2">
                        <Plus />
                        배송지 신규입력
                      </span>
                    </div>
                    <RadioGroup onValueChange={handleAddressSelect}>
                      {addresses.map((address, index) => (
                        <div
                          key={index}
                          onClick={() => handleAddressSelect(address)}
                          className="cursor-pointer">
                          <div className="flex items-center gap-2 p-4 mb-2">
                            <RadioGroupItem
                              key={index}
                              value={address}
                              checked={selectedAddress === address}
                            />
                            <span className="font-bold">{address}</span>
                          </div>
                          <hr />
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>

        <section className="sticky top-0 w-[25%] flex flex-col gap-4 z-0 whitespace-nowrap">
          <Label className="pl-4 font-bold">결제 정보</Label>
          <div className="flex flex-col gap-4 px-6 py-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <div className="flex justify-between text-sm">
              <span>상품금액</span>
              <span>{totalProductPrice.toLocaleString()}원</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>배송비</span>
              <span>{data.shippingFee.toLocaleString()}원</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>할인</span>
              <span>-{data.discount.toLocaleString()}원</span>
            </div>
            <hr />
            <div className="flex justify-between text-sm font-bold">
              <span>결제금액</span>
              <span>{totalPayment.toLocaleString()}원</span>
            </div>
          </div>
          <Button className="bg-[#007AFD] hover:bg-blue-800">결제하기</Button>
        </section>
      </main>
    </>
  );
}
