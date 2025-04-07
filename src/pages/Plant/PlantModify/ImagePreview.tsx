import { X } from 'lucide-react';
interface Props {
  image: string;
  onRemove: () => void;
}
/**
 * ImagePreview
 *
 * 업로드된 이미지를 미리보기 형태로 보여주는 컴포넌트입니다.
 */
export default function ImagePreview({ image, onRemove }: Props) {
  return (
    <div className="relative border border-gray-200 rounded flex justify-center items-center p-6">
      <img
        src={image}
        className="h-[15rem]"
      />
      <X
        className="absolute top-3 right-3 cursor-pointer"
        onClick={onRemove}
      />
    </div>
  );
}
