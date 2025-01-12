import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface AddressFieldProps {
  field: {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
  };
  value: string;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddressSelect: (newAddress: string) => void;
}

/**
 * AddressField 컴포넌트
 * 주소 입력 필드와 "주소 검색" 버튼을 렌더링링.
 */
export default function AddressField({
  field,
  value,
  disabled,
  onChange,
  onAddressSelect,
}: AddressFieldProps) {
  const handleAddressSearch = () => {
    const mockAddress = '경상북도 상주시'; // 예제 주소
    alert('주소 검색 완료: ' + mockAddress);
    onAddressSelect(mockAddress); // 선택한 주소 전달
  };

  return (
    <div className="grid w-auto gap-1.5">
      <Label htmlFor={field.name}>{field.label}</Label>
      <div className="flex gap-2">
        <Input
          id={field.name}
          name={field.name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={field.placeholder}
          type={field.type}
        />
        <Button
          type="button"
          onClick={handleAddressSearch}
          disabled={disabled}
          className="bg-[#007AFD] hover:bg-[#0063CD]">
          주소 검색
        </Button>
      </div>
    </div>
  );
}
