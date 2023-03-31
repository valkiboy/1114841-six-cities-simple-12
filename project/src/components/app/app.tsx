import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../common/const';
import MainPage from '../../pages/main-page/main-page';
import RoomPage from '../../pages/room-page/room-page';
import LoginPage from '../../pages/login-page/login-page';
import PageNotFound from '../../pages/not-found-page/not-found-page';
import { Reviews, Offer, City } from '../../types/offer';
import ScrollToTop from '../scrool-to-top/scrool-to-top';
import PrivateRoute from '../private-route/private-route';


type AppPageProps = {
  reviews: Reviews[];
  offers: Offer[];
  citys: City[];
}


function App({ offers, reviews, citys }: AppPageProps): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <MainPage offers={offers} citys={citys} authorizationStatus={AuthorizationStatus.Auth}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Room}
            element={<RoomPage offers={offers} reviews={reviews} citys={citys} authorizationStatus={AuthorizationStatus.Auth} />}
          />
          <Route
            path='*'
            element={<PageNotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
