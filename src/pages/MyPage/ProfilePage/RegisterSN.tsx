import { useMutation } from '@tanstack/react-query';
import Lottie from 'lottie-react';
import { useState } from 'react';
import { toast } from 'react-toastify';

import check from '@/assets/lottie/checkAnimation.json';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { API_AUTHORITY, API_ENDPOINT } from '@/services/apiEndpoint';
import { axiosInstance } from '@/services/axiosInstance';
import { getUserToken } from '@/utils/getUserToken';

export default function RegisterSN({ checkSN }: { checkSN: boolean }) {
  const [isRegistered, setIsRegistered] = useState(checkSN);
  const [sn, setSn] = useState('');

  const postRegisterSN = async (sn: string) => {
    const token = getUserToken();

    await axiosInstance.post(
      `${API_AUTHORITY.USER}${API_ENDPOINT.DEVICE_REGISTER}?serialNumber=${sn}`,
      sn,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  const useRegisterSN = setIsRegistered => {
    return useMutation({
      mutationFn: postRegisterSN,
      onSuccess: () => {
        toast.success('등록에 성공하였습니다!');
        setIsRegistered(true);
      },
      onError: () => {
        toast.error('오류가 발생하였습니다. 다시 시도해주세요.');
      },
    });
  };

  const { mutate: registerSNMutate } = useRegisterSN(setIsRegistered);

  return (
    <div className="flex flex-col py-2 border-b border-gray-200 md:flex-row md:items-center">
      <span className="w-32 p-2 text-sm text-gray-600">SN 등록 여부</span>

      {isRegistered ? (
        <Lottie
          className="w-10 h-10"
          animationData={check}
          loop={false}
        />
      ) : (
        <div className="flex-1 p-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">등록하기</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="mb-1 text-xl font-bold">
                  SN 등록
                </DialogTitle>
                <DialogDescription>
                  구매 내역 페이지에서 복사한 SN 코드를 등록해 주세요.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid items-center grid-cols-4 gap-4">
                  <Label
                    htmlFor="name"
                    className="text-right">
                    SN
                  </Label>
                  <Input
                    id="name"
                    className="col-span-3"
                    onChange={e => {
                      setSn(e.target.value);
                    }}
                  />
                </div>
              </div>
              <DialogFooter className="flex items-end">
                <Button
                  type="submit"
                  onClick={() => registerSNMutate(sn)}>
                  등록하기
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
}
