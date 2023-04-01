import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../common/const';
// import { AppRoute } from '../../common/const';
import MainPage from '../../pages/main-page/main-page';
import RoomPage from '../../pages/room-page/room-page';
import LoginPage from '../../pages/login-page/login-page';
import PageNotFound from '../../pages/not-found-page/not-found-page';
import ScrollToTop from '../scrool-to-top/scrool-to-top';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../../pages/loading-screen/loading-screen';


// type AppPageProps = {
//   reviews: Reviews[];
//   offers: Offer[];
// cities: City[];
// }


function App(): JSX.Element {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading: boolean = useAppSelector((state) => state.isOffersDataLoading);

  // TODO строка для линтера
  // eslint-disable-next-line
  console.log('authorizationStatus', authorizationStatus)

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Room}
            element={<RoomPage />}
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
