export const API_ENDPOINT = {
  AUTH: {
    SIGNIN: '/signin',
    SIGNUP: '/signup',
    VALIDATE: '/validate',
  },
  PRODUCT: {
    KIT: '/item/searchId',
  },
  ORDER: {
    LOOK_UP: '/order',
    CREATE: '/order/create',
    ORDER_LIST: '/order/history',
  },
  PROFILE: '/info',
  PASSWORD: '/changePassword',
  PLANT: {
    GET_LIST: '/getList',
    CREATE: '/create',
  },
};

export const API_AUTHORITY = {
  PUBLIC: '/public',
  ADMIN: '/admin',
  USER: '/user',
  PLANT: '/plant',
};
