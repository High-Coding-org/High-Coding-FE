import { Route, Routes } from 'react-router-dom';

import {
  HomePage,
  KitDetailPage,
  KitOrderPage,
  LoginPage,
  MyPlantPage,
  NotFoundPage,
  OrderComplete,
  OrderList,
  PlantDetail,
  PlantRecommend,
  PlantRegister,
  ProfilePage,
} from '@/pages';
import CustomerCenter from '@/pages/CustomerCenter/CustomerCenter';
import { Layout } from '@/pages/Layout/Layout';
import PlantDictionary from '@/pages/MyPlantPage/PlantDictionary/PlantDictionary';

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

        {/* 프로필 페이지 */}
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

        {/* 키트 페이지 */}
        <Route path={PATH.PRODUCT}>
          <Route
            index
            element={<KitDetailPage />}
          />
          <Route
            path={`${PATH.PRODUCT_ORDER}/:${PRODUCT_ORDER_PARAMS.KIT_ID}/:${PRODUCT_ORDER_PARAMS.PRODUCT_NAME}/:${PRODUCT_ORDER_PARAMS.QUANTITY}/:${PRODUCT_ORDER_PARAMS.PRICE}`}
            element={<PrivateRoute page={<KitOrderPage />} />}
          />
          <Route
            path={PATH.ORDER_COMPLETE}
            element={<PrivateRoute page={<OrderComplete />} />}
          />
        </Route>

        {/* 식물 페이지 */}
        <Route path={PATH.PLANT}>
          <Route
            path={PATH.PLANT_MY_PLANT}
            element={<PrivateRoute page={<MyPlantPage />} />}
          />
          <Route
            path={PATH.PLANT_REGISTER}
            element={<PrivateRoute page={<PlantRegister />} />}
          />
          {/* 내 식물 수정 추가 예정 */}
          {/* <Route
            path={PATH.PLANT_MODIFY}
            element={<PrivateRoute page={< />} />}
          /> */}
          <Route
            path={PATH.PLANT_DETAIL}
            element={<PrivateRoute page={<PlantDetail />} />}
          />
          <Route
            path={PATH.PLANT_DICTIONARY}
            element={<PrivateRoute page={<PlantDictionary />} />}
          />
          <Route
            path={PATH.PLANT_RECOMMEND}
            element={<PrivateRoute page={<PlantRecommend />} />}
          />
        </Route>

        {/* 고객 센터 페이지 */}
        <Route
          path={PATH.CUSTOMER_CENTER}
          element={<PrivateRoute page={<CustomerCenter />} />}
        />
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
