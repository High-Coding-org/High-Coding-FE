import { Progress } from '@/components/ui/progress';

interface PlantInfo {
  imageUrl: string;
  name: string;
  growthRate: number;
}

interface PlantDiaryFormProps {
  plantInfo: PlantInfo;
}

export default function PlantInfoSection({ plantInfo }: PlantDiaryFormProps) {
  return (
    <div className="flex items-center gap-4">
      <img
        src={plantInfo.imageUrl}
        alt={plantInfo.name}
        className="object-cover w-24 h-24 rounded-lg"
      />
      <div className="flex-1">
        <h2 className="mb-2 text-lg font-semibold">{plantInfo.name}</h2>
        <p className="mb-2 text-sm text-gray-600">
          전체 대비 {plantInfo.growthRate}% 성장했어요!
        </p>
        <Progress
          value={plantInfo.growthRate}
          className="w-full"
        />
      </div>
    </div>
  );
}
