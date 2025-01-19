import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { X, Plus } from 'lucide-react';
import { DELIVERY_NOTES } from '@/constants/deliveryNotes';
import { PAYMENT_METHODS } from '@/constants/paymentMethods';
import { OrderProps } from '@/pages/OrderPage/type';

export default function Order({
  purchaseData,
  orderItems,
  coupons,
  addresses,
}: OrderProps) {
  //상태 관리
  const [data, setData] = useState({ ...purchaseData });
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isCouponModalOpen, setisCouponModalOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(data.shippingAddress);

  //모달 열기/닫기 함수
  const openCouponModal = () => setisCouponModalOpen(true);
  const closeCouponModal = () => setisCouponModalOpen(false);
  const openAddressModal = () => setIsAddressModalOpen(true);
  const closeAddressModal = () => setIsAddressModalOpen(false);

  //할인 선택 처리 함수
  const handleDiscountSelect = discountValue => {
    setData(prevData => ({
      ...prevData,
      discount: discountValue,
    }));
    setisCouponModalOpen(false);
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
    setIsAddressModalOpen(false); // 배송지 모달 닫기
  };

  // 결제 금액 계산
  const totalPayment = totalProductPrice + data.shippingFee - data.discount;

  return (
    <main>
      {/* 결제 정보 */}
      <section className="fixed top-0 right-0 w-[25%] flex flex-col gap-4 z-0 whitespace-nowrap">
        <Label className="font-bold pl-4">결제 정보</Label>
        <div className="flex flex-col gap-4 bg-white border border-gray-200 rounded-lg shadow-md px-6 py-6">
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

      <section className="w-[70%] whitespace-nowrap">
        {/* 배송지 */}
        <section className="mb-6 flex flex-col gap-4">
          <Label className="font-bold pl-4">배송지</Label>
          <div className="flex flex-col gap-2 bg-white border border-gray-200 rounded-lg shadow-md px-6 py-6">
            <div className="flex justify-between items-center h-10">
              <div>
                <div className="font-bold mb-1">{data.name}</div>
                <div className="text-xs text-gray-500">{data.phoneNumber}</div>
              </div>
              <Button
                onClick={openAddressModal}
                className=" bg-white cursor-pointer text-black border border-gray-200 hover:bg-white">
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
        <section className="mb-6 flex flex-col gap-4">
          <Label className="font-bold pl-4">주문상품</Label>

          <div>
            <div className="bg-white shadow-md rounded-lg border border-gray-200 px-6 py-6 mb-4">
              <p className="text-xs text-gray-500">{orderItems.price}원</p>
              <h3 className="text-base font-bold">{orderItems.productName}</h3>
              <p className="text-sm">{orderItems.quantity}개</p>
            </div>
          </div>
        </section>

        {/* 할인 */}
        <section className="mb-6 flex flex-col gap-4 font-bold">
          <div>
            <div className="flex justify-between items-center py-4 px-6 border-l border-t border-r rounded-t-lg">
              <div>
                할인/쿠폰
                <Button
                  className="ml-5 bg-white text-black border-gray-200 border hover:bg-white"
                  onClick={openCouponModal}>
                  변경
                </Button>
              </div>
              -{data.discount.toLocaleString()}원
            </div>
            <div className="flex justify-between bg-blue-100  border-b border-l border-r border-gray-200  py-6 px-6 rounded-b-lg">
              <span>총 주문 금액:</span> {totalPayment.toLocaleString()}원
            </div>
          </div>
        </section>

        {/* 결제수단 */}
        <section className="mb-6 flex flex-col gap-4">
          <Label className="font-bold pl-4">결제수단</Label>
          <div className="bg-white border border-gray-200 rounded-lg shadow-md px-6 py-6">
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
          <section className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items center mb-4">
                <h2 className="text-lg font-bold mb-4">쿠폰 사용</h2>
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
                      className="mb-2 border border-gray-200 rounded-lg w-64 p-4 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <RadioGroupItem
                          key={index}
                          value={coupon.name}
                          checked={selectedCoupon === coupon.name}
                          onClick={() => handleRadioGroupItemClick(coupon.name)}
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
          <section className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between item-center mb-4">
                <h2 className="text-lg font-bold mb-4">배송지 변경</h2>
                <X
                  onClick={closeAddressModal}
                  className="cursor-pointer hover:text-gray-500"
                />
              </div>
              <div>
                <div>
                  <div className="flex item-center cursor-pointer gap-2 mb-2 p-4 font-bold border border-gray-200 rounded-lg">
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
                        <div className="flex items-center gap-2 mb-2 p-4">
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
      </section>
    </main>
  );
}
