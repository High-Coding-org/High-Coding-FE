import { Route, Routes } from 'react-router-dom';

import {
  HomePage,
  KitDetailPage,
  KitOrderPage,
  LoginPage,
  MyPlantPage,
  NotFoundPage,
  OrderList,
  PlantDetail,
  PlantRecommend,
  PlantRegister,
  ProfilePage,
} from '@/pages';
import { Layout } from '@/pages/Layout/Layout';

import { PATH, PRODUCT_ORDER_PARAMS } from './path';
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
            element={<PrivateRoute page={<OrderList />} />}
          />
        </Route>

        <Route path={PATH.PRODUCT}>
          <Route
            index
            element={<KitDetailPage />}
          />
          <Route
            path={`${PATH.PRODUCT_ORDER}/:${PRODUCT_ORDER_PARAMS.KIT_ID}/:${PRODUCT_ORDER_PARAMS.PRODUCT_NAME}/:${PRODUCT_ORDER_PARAMS.QUANTITY}/:${PRODUCT_ORDER_PARAMS.PRICE}`}
            element={<PrivateRoute page={<KitOrderPage />} />}
          />
        </Route>

        <Route path={PATH.PLANT}>
          <Route
            index
            element={<PrivateRoute page={<MyPlantPage />} />}
          />
          <Route
            path={PATH.PLANT_RECOMMEND}
            element={<PrivateRoute page={<PlantRecommend />} />}
          />
          <Route
            path={PATH.PLANT_REGISTER}
            element={<PrivateRoute page={<PlantRegister />} />}
          />
          <Route
            path={PATH.PLANT_DETAIL}
            element={<PrivateRoute page={<PlantDetail />} />}
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
