import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { INPUT_FIELDS } from './constants/inputFields';
import { VALID_EXTENSIONS } from './constants/validExtensions';
import GoalGrowthField from './GoalGrowthField';
import ImageDropZone from './ImageDropZone';
import ImagePreview from './ImagePreview';
import InputField from './InputField';
import { IPlantRegister } from './types';

/**
 * PlantRegister
 *
 * 사용자가 식물 품종을 등록할 수 있는 폼을 제공합니다.
 */
export default function PlantRegister() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<IPlantRegister>({
    plantName: '',
    temperature: null,
    humidity: null,
    light: null,
    soilMoisture: null,
    goalGrowth: null,
    image: null,
  });
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleImageUploadClick = () => {
    fileRef.current.click();
  };

  const isValidImageFile = (file: File) => {
    const extension = file.name.split('.').pop();
    return extension && VALID_EXTENSIONS.includes(extension);
  };

  const handleFileUpload = (file: File) => {
    if (!isValidImageFile(file)) {
      toast.error('PNG, JPG, JPEG, WEBP 형식의 파일만 업로드 가능합니다.');
      return;
    } else if (file.size > 10 * 1024 * 1024) {
      toast.error(`파일 크기는 10MB 이하로 업로드해주세요.`);
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setState(prev => ({ ...prev, image: imageUrl }));
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (!file) return;
    handleFileUpload(file);
  };

  const handleChange = e => {
    const { id, value } = e.target;
    setState(prev => ({ ...prev, [id]: value }));
  };

  const handleDrop = e => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const handleGoalGrowthSearch = () => {
    // TODO: chatgpt api 연결해서 목표 성장치 검색하기
    //! mockData로 100설정
    setState(prev => ({ ...prev, goalGrowth: 100 }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: API 연결하여 등록 값 전달해야 함
    console.log('state', state);
  };

  return (
    <>
      {/* 상단 타이틀 및 Breadcrumb */}
      <BreadcrumbAndTitle />
      <main className="w-full max-w-[1140px] mb-20 px-5 md:px-0">
        <form onSubmit={handleSubmit}>
          {/*이미지 업로드 섹션*/}
          <div className="w-full max-w-[40rem] h-auto border border-gray-200 p-6 rounded mb-4 flex flex-col gap-4">
            <h1 className="font-bold">이미지 업로드</h1>
            {state.image ? (
              <ImagePreview
                image={state.image}
                onRemove={() => {
                  setState(prev => ({ ...prev, image: null }));
                }}
              />
            ) : (
              <ImageDropZone
                onDragEnter={() => {
                  setIsDragging(true);
                }}
                onDragLeave={() => {
                  setIsDragging(false);
                }}
                onDragOver={e => {
                  e.preventDefault();
                }}
                onDrop={handleDrop}
                handleClick={handleImageUploadClick}
                isDragging={isDragging}
              />
            )}
            <Input
              id="input-file"
              ref={fileRef}
              className="hidden"
              type="file"
              onChange={handleFileChange}
            />
          </div>

          {/*품종 등록 섹션*/}
          <div className="border border-gray-200 p-6 rounded flex flex-col gap-4 w-full max-w-[40rem]">
            <h1 className="font-bold">품종 등록</h1>
            {/* 품종명, 온도, 습도, 광량, 토양습도 입력 필드 */}
            {INPUT_FIELDS.map(field => (
              <InputField
                key={field.id}
                id={field.id}
                label={field.label}
                type={field.type}
                step={field.step}
                min={field.min}
                max={field.max}
                onChange={handleChange}
                required={field.required}
              />
            ))}

            {/*목표 성장치 입력 필드*/}
            <GoalGrowthField
              value={state.goalGrowth}
              onChange={handleChange}
              onSearchClick={handleGoalGrowthSearch}
            />
          </div>
          <div className="flex justify-between max-w-[40rem] mt-4">
            <Button
              type="button"
              onClick={handleBack}
              className="bg-gray-400 hover:bg-gray-3  00">
              뒤로 가기
            </Button>
            <Button type="submit">품종 등록</Button>
          </div>
        </form>
      </main>
    </>
  );
}
