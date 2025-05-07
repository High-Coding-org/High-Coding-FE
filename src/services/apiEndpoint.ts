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
  DEVICE_REGISTER: '/device/register',
  PLANT: {
    GET_LIST: '/getList',
    CREATE: '/create',
    UPDATE: '/update',
    DELETE: '/delete',
    GET_PLANT: '/getPlant',
    GET_PLANT_DIARY: '/PlantGrowthLog/get',
    POST_PLANT_DIARY: '/PlantGrowthLog/create',
  },
};

export const API_AUTHORITY = {
  PUBLIC: '/public',
  ADMIN: '/admin',
  USER: '/user',
  PLANT: '/plant',
};
