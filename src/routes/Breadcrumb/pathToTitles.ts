import { PATH } from '@/routes/path';

// 경로별 제목 정의
export const PATH_TO_TITLES: Record<keyof typeof PATH, string> = {
  SIGN: '로그인 & 회원가입',
  PROFILE: '회원 정보',
  PROFILE_MY_ORDER: '주문 내역',
  PRODUCT: '상품',
  PRODUCT_PURCHASE: '구매하기',
  PLANT: '식물',
  PLANT_RECOMMEND: '추천 식물',
  PLANT_REGISTER: '식물 등록',
  PLANT_DETAIL: '식물 상세 정보',
};
