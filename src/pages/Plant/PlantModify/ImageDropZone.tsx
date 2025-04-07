import { Image } from 'lucide-react';

interface ImageDropZoneProps {
  onDragEnter: (e) => void;
  onDragLeave: (e) => void;
  onDragOver: (e) => void;
  onDrop: (e) => void;
  handleClick: (e) => void;
  isDragging: boolean;
}
/**
 * ImageDropZone
 *
 * 이미지 업로드 및 드래그 앤 드롭을 지원하는 컴포넌트입니다.
 */
export default function ImageDropZone({
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  handleClick,
  isDragging,
}: ImageDropZoneProps) {
  return (
    <div
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      className={`w-full h-40 border-2 rounded flex flex-col gap-2 items-center justify-center transition 
                  ${isDragging ? 'border-blue-400 bg-blue-50' : 'border-gray-200'}`}>
      <Image
        className="w-10 h-10 "
        strokeWidth={0.8}
      />
      <p>
        <span
          onClick={handleClick}
          className="text-blue-400 cursor-pointer hover:underline">
          이미지 업로드
        </span>{' '}
        또는 드래그 앤 드롭
      </p>
      <p>PNG, JPG, JPEG, WEBP up to 10MB</p>
    </div>
  );
}
