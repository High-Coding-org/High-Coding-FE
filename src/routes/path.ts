import { IPath } from '@/types/path';

export const PATH: IPath = {
  HOME: '/',

  // Login & Signup
  SIGN: '/sign',

  // Profile
  PROFILE: '/profile',
  PROFILE_PASSWORD: 'password',
  PROFILE_ORDER_LIST: 'order-list',

  // Product
  PRODUCT: '/product',
  PRODUCT_ORDER: 'order',
  ORDER_COMPLETE: 'order/complete',

  // Plant
  PLANT: '/plant',
  PLANT_MY_PLANT: 'myPlant',
  PLANT_REGISTER: 'register',
  PLANT_MODIFY: 'modify',
  PLANT_DETAIL: 'detail',
  PLANT_DICTIONARY: 'dictionary',
  PLANT_RECOMMEND: 'AIRecommend',
  PLANT_DIARY: 'diary',

  // Customer Center
  CUSTOMER_CENTER: 'customer-center',

  // 404 Not Found
  NOT_FOUND: '*',
};

export const PRODUCT_ORDER_PARAMS = {
  KIT_ID: 'kitId',
  PRODUCT_NAME: 'productName',
  QUANTITY: 'quantity',
  PRICE: 'price',
};
