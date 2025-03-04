import { IPath } from '@/types/path';

export const PATH: IPath = {
  HOME: '/',

  // Login & Signup
  SIGN: '/sign',

  // Profile
  PROFILE: '/profile',
  PROFILE_MY_ORDER: 'my-order',
  PROFILE_ORDER_LIST: 'order-list',

  // Product
  PRODUCT: '/product',
  PRODUCT_PURCHASE: 'purchase',
  ORDER_COMPLETE: 'order/complete',

  // Plant
  PLANT: '/plant',
  PLANT_RECOMMEND: 'recommend',
  PLANT_REGISTER: 'register',
  PLANT_DETAIL: 'detail/:id',

  // 404 Not Found
  NOT_FOUND: '*',
};
