import { Route, Routes } from 'react-router-dom';

import {
  HomePage,
  LoginPage,
  MyPlantPage,
  NotFoundPage,
  OrderList,
  PlantDetail,
  PlantRecommend,
  PlantRegister,
  ProductPage,
  ProfilePage,
  PurchasePage,
} from '@/pages';
import { Layout } from '@/pages/Layout/Layout';

import { PATH } from './path';
import PrivateRoute from './PrivateRoute';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout showHeader={true} />}>
        <Route
          index
          element={<HomePage />}
        />

        <Route path={PATH.PROFILE}>
          <Route
            index
            element={<PrivateRoute page={<ProfilePage />} />}
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
      </Route>

      <Route element={<Layout showHeader={false} />}>
        <Route
          path={PATH.SIGN}
          element={<LoginPage />}
        />
        <Route
          path={PATH.NOT_FOUND}
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
}
