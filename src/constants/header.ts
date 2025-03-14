import { CircleHelp, CircleUserRound } from 'lucide-react';

import { getUserToken } from '@/utils/getUserToken';

export const MENU_ITEMS = [
  '키트 정보',
  '나의 식물',
  '식물 지식백과',
  'AI 식물 추천',
];

export const NAME_TO_PATH = {
  '키트 정보': '/product',
  '나의 식물': '/plant/myPlant',
  '식물 지식백과': '/plant/dictionary',
  'AI 식물 추천': '/plant/AIRecommend',
  '내 정보': '/profile',
  '고객 센터': '/customer-center',
};

// 밑에 애 한테다가 아이콘이름도 넣어서 객체형태로 바꿔볼까
export const ADDITIONAL_MENU_ITEMS = ['고객 센터', '내 정보'];

export const MENU_ITEMS_ICON = {
  '고객 센터': CircleHelp,
  '내 정보': CircleUserRound,
  '로그인/로그아웃': getUserToken() ? CircleUserRound : CircleUserRound,
};
