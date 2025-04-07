import { CircleHelp, CircleUserRound } from 'lucide-react';

import { PATH } from '@/routes/path';

export const MENU_ITEMS = [
  '키트 정보',
  '나의 식물',
  '식물 지식백과',
  'AI 식물 추천',
];

export const NAME_TO_PATH = {
  '키트 정보': PATH.PRODUCT,
  '나의 식물': PATH.PLANT,
  '식물 지식백과': `${PATH.PLANT}/${PATH.PLANT_DICTIONARY}`,
  'AI 식물 추천': `${PATH.PLANT}/${PATH.PLANT_RECOMMEND}`,
  '내 정보': PATH.PROFILE,
  '고객 센터': PATH.CUSTOMER_CENTER,
  '로그인/로그아웃': PATH.SIGN,
} as const;

export const ADDITIONAL_MENU_ITEMS = [
  '고객 센터',
  '내 정보',
  '로그인/로그아웃',
];

export const MENU_ITEMS_ICON = {
  '고객 센터': CircleHelp,
  '내 정보': CircleUserRound,
};
