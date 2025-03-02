import { PATH } from '@/routes/path';

// 경로별 제목 정의
export const PATH_TO_TITLES: Record<keyof typeof PATH, string> = {
  PROFILE: '회원 정보',
  PROFILE_MY_ORDER: '구매 내역',
  PRODUCT: '키트 구매',
  PRODUCT_PURCHASE: '주문/결제',
  PLANT: '식물',
  PLANT_RECOMMEND: 'AI 식물 추천',
  PLANT_REGISTER: '식물 등록',
  PLANT_DETAIL: '식물 성장',
};
