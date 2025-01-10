import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import MyPlantPage from './pages/MyPlantPage/MyPlantPage';
import PlantDetail from './pages/MyPlantPage/PlantDetail/PlantDetail';
import PlantRecommend from './pages/MyPlantPage/PlantRecommend/PlantRecommend';
import PlantRegister from './pages/MyPlantPage/PlantRegister/PlantRegister';
import ProductPage from './pages/ProductPage/ProductPage';
import ProfilePage from './pages/ProfilePage/MyPage';
import OrderList from './pages/ProfilePage/OrderList/OrderList';
import PurchasePage from './pages/PurchasePage/PurchasePage';

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
