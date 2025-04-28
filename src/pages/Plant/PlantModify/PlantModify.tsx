import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import BreadcrumbAndTitle from '@/components/common/Breadcrumb/BreadcrumbAndTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MY_PLANT_QUERY_KEY } from '@/constants/plantQueryKey';
import { API_AUTHORITY, API_ENDPOINT } from '@/services/apiEndpoint';
import { axiosInstance } from '@/services/axiosInstance';

import { INPUT_FIELDS } from './constants/inputFields';
import { VALID_EXTENSIONS } from './constants/validExtensions';
import ImageDropZone from './ImageDropZone';
import ImagePreview from './ImagePreview';
import InputField from './InputField';

interface PlantRegisterFormData {
  plantName: string;
  temperature: string | number;
  humidity: string | number;
  light: string | number;
  soilMoisture: string | number;
  goalGrowth: number | '';
  image: string;
}

/**
 * PlantRegister
 *
 * 사용자가 식물 품종을 등록할 수 있는 폼을 제공합니다.
 */
export default function PlantModify() {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const plant = queryClient.getQueryData([MY_PLANT_QUERY_KEY]);

  useEffect(() => {
    if (!plant) {
      navigate(-1);
      return;
    }

    console.log(plant[Number(id) - 1]);
  }, [plant, id, navigate]);

  const fileRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const methods = useForm<PlantRegisterFormData>({
    defaultValues: {
      plantName: '',
      temperature: '',
      humidity: '',
      light: '',
      soilMoisture: '',
      goalGrowth: '',
      image: '',
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = methods;

  const image = watch('image');

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
    setValue('image', imageUrl);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    handleFileUpload(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    setIsDragging(false);
    handleFileUpload(file);
  };

  const handleGoalGrowthSearch = () => {
    // TODO: chatgpt api 연결해서 목표 성장치 검색하기
    //! mockData로 100설정
    setValue('goalGrowth', 100);
  };

  const modifyPlantRegister = async (plant, image) => {
    // const reqBody = {
    //   name,
    //   idealTemperature,
    //   idealHumidity,
    //   idealSolidMoisture,
    //   idealLightIntensity,
    //   growthTarget,
    //   image,
    // };

    const formData = new FormData();
    formData.append('request', JSON.stringify(plant)); // 오브젝트를 JSON 문자열로 변환
    formData.append('image', image); // 파일 객체

    const res = await axiosInstance.post(
      `${API_AUTHORITY.PLANT}${API_ENDPOINT.PLANT.CREATE}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    // return res;
    console.log(res);
  };

  const onSubmit = (data: PlantRegisterFormData) => {
    modifyPlantRegister(
      {
        name: data.plantName,
        idealTemperature: data.temperature,
        idealHumidity: data.humidity,
        idealSolidMoisture: data.soilMoisture,
        idealLightIntensity: data.light,
        growthTarget: data.goalGrowth,
      },
      data.image
    );
  };

  return (
    <FormProvider {...methods}>
      {/* 상단 타이틀 및 Breadcrumb */}
      <BreadcrumbAndTitle />
      <main className="w-full max-w-[1140px] mb-20 px-5 md:px-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*이미지 업로드 섹션*/}
          <div className="w-full max-w-[40rem] h-auto border border-gray-300 p-6 rounded mb-4 flex flex-col gap-4">
            <h1 className="mb-4 text-xl font-bold">이미지 업로드</h1>
            {image ? (
              <ImagePreview
                image={image}
                onRemove={() => {
                  setValue('image', '');
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
                handleClick={() => fileRef.current?.click()}
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
          <div className="border border-slate-300 bg-white p-6 rounded flex flex-col gap-4 w-full max-w-[40rem]">
            <h1 className="mb-4 text-xl font-bold">품종 등록</h1>

            {/* 품종명, 온도, 습도, 광량, 토양습도, 목표 성장치 입력 필드 */}
            {INPUT_FIELDS.map(field => {
              const { ref, ...registerProps } = register(
                field.id as keyof PlantRegisterFormData,
                {
                  valueAsNumber: field.type === 'number',
                  required: field.required
                    ? `${field.label}을 입력해주세요`
                    : false,
                  validate: value => {
                    if (field.type === 'number') {
                      const numValue = Number(value);
                      if (isNaN(numValue)) return '숫자를 입력해주세요';
                      if (field.min !== undefined && numValue < field.min) {
                        return `${field.label}은(는) ${field.min} 이상이어야 합니다.`;
                      }
                      if (field.max !== undefined && numValue > field.max) {
                        return `${field.label}은(는) ${field.max} 이하여야 합니다.`;
                      }
                    }
                    return true;
                  },
                }
              );

              return (
                <div
                  key={field.id}
                  className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <InputField
                      id={field.id}
                      label={field.label}
                      type={field.type}
                      step={field.step}
                      min={field.min}
                      max={field.max}
                      error={
                        errors[field.id as keyof PlantRegisterFormData]?.message
                      }
                      ref={ref}
                      {...registerProps}
                    />
                    {field.id === 'goalGrowth' && (
                      <Button
                        onClick={handleGoalGrowthSearch}
                        className="self-end">
                        검색
                      </Button>
                    )}
                  </div>
                  {errors[field.id as keyof PlantRegisterFormData]?.message && (
                    <p className="text-sm text-red-500">
                      {errors[field.id as keyof PlantRegisterFormData]?.message}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex justify-between max-w-[40rem] mt-4">
            <Button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-gray-400 hover:bg-gray-300">
              뒤로 가기
            </Button>
            <Button type="submit">품종 등록</Button>
          </div>
        </form>
      </main>
    </FormProvider>
  );
}
