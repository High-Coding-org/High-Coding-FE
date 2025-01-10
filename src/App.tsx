import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="/sign"
          element={<LoginPage />}
        />

        <Route path="/profile">
          <Route
            index
            element={<ProfilePage />}
          />
          <Route
            path="my-order"
            element={<OrderList />}
          />
        </Route>

        <Route path="/product">
          <Route
            index
            element={<ProductPage />}
          />
          <Route
            path="purchase"
            element={<PurchasePage />}
          />
        </Route>

        <Route path="/plant">
          <Route
            index
            element={<MyPlantPage />}
          />
          <Route
            path="recommend"
            element={<PlantRecommend />}
          />
          <Route
            path="register"
            element={<PlantRegister />}
          />
          <Route
            path="detail/:id"
            element={<PlantDetail />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
