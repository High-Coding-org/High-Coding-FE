import { PATH_TO_TITLES } from '@/components/common/Breadcrumb/pathToTitles';
import { PATH } from '@/routes/path';

// titles 생성 (PATH_TO_TITLES의 경로에서 앞에 있는 / 제거)
export const TITLES: { [key: string]: string } = Object.keys(
  PATH_TO_TITLES
).reduce(
  (acc, key) => {
    const pathKey = key as keyof typeof PATH;
    const fullPath = PATH[pathKey];

    const cleanedPath = fullPath.replace(/^\//, '');
    acc[cleanedPath] = PATH_TO_TITLES[pathKey]!;

    return acc;
  },
  {} as { [key: string]: string }
);
