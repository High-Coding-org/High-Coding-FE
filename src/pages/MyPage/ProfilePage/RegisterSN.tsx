import Lottie from 'lottie-react';

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

export default function RegisterSN({ checkSN }: { checkSN: boolean }) {
  return (
    <div className="flex flex-col py-2 border-b border-gray-200 md:flex-row md:items-center">
      <span className="w-32 p-2 text-sm text-gray-600">SN 등록 여부</span>

      {checkSN ? (
        <Lottie
          className="w-12 h-12"
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
                  />
                </div>
              </div>
              <DialogFooter className="flex items-end">
                <Button type="submit">등록하기</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
}
