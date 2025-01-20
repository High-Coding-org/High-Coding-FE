import { IPath } from '@/types/path';

export const PATH: IPath = {
  // Login & Signup
  SIGN: '/sign',

  // Profile
  PROFILE: '/profile',
  PROFILE_MY_ORDER: 'my-order',

  // Product
  PRODUCT: '/product',
  PRODUCT_PURCHASE: 'purchase',

  // Plant
  PLANT: '/plant',
  PLANT_RECOMMEND: 'recommend',
  PLANT_REGISTER: 'register',
  PLANT_DETAIL: 'detail/:id',

  // 404 Not Found
  NOT_FOUND: '*',
};
