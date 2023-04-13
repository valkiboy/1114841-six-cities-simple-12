import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/index';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../common/const';
import MainPage from '../../pages/main-page/main-page';
import RoomPage from '../../pages/room-page/room-page';
import LoginPage from '../../pages/login-page/login-page';
import PageNotFound from '../../pages/not-found-page/not-found-page';
import ScrollToTop from '../scrool-to-top/scrool-to-top';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
// import { getOffersDataLoading } from '../../store/offers-data/offers-data.selectors';
import { getErrorStatus, getOffersDataLoading } from '../../store/offers-data/offers-data.selectors';
import ErrorScreen from '../../pages/error-screen/error-screen';

function App(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading: boolean = useAppSelector(getOffersDataLoading);
  const hasError = useAppSelector(getErrorStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  //TODO
  // eslint-disable-next-line
  console.log('state.hasError', hasError)

  if (hasError) {
    return (
      <ErrorScreen />);
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage /> }
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
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
