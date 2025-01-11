import { Route, Routes } from 'react-router-dom';

import {
  HomePage,
  LoginPage,
  MyPlantPage,
  OrderList,
  PlantDetail,
  PlantRecommend,
  PlantRegister,
  ProductPage,
  ProfilePage,
  PurchasePage,
} from '@/pages';

import { PATH } from './path';

export function AppRoutes() {
  return (
    <Routes>
      <Route
        index
        element={<HomePage />}
      />
      <Route
        path={PATH.SIGN}
        element={<LoginPage />}
      />

      <Route path={PATH.PROFILE}>
        <Route
          index
          element={<ProfilePage />}
        />
        <Route
          path={PATH.PROFILE_MY_ORDER}
          element={<OrderList />}
        />
      </Route>

      <Route path={PATH.PRODUCT}>
        <Route
          index
          element={<ProductPage />}
        />
        <Route
          path={PATH.PRODUCT_PURCHASE}
          element={<PurchasePage />}
        />
      </Route>

      <Route path={PATH.PLANT}>
        <Route
          index
          element={<MyPlantPage />}
        />
        <Route
          path={PATH.PLANT_RECOMMEND}
          element={<PlantRecommend />}
        />
        <Route
          path={PATH.PLANT_REGISTER}
          element={<PlantRegister />}
        />
        <Route
          path={PATH.PLANT_DETAIL}
          element={<PlantDetail />}
        />
      </Route>
    </Routes>
  );
}
