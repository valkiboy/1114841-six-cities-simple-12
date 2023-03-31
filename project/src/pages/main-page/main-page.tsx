import OfferList from '../../components/offer-list/offer-list';
import Header from '../../components/header/header';
import { Offer, City } from '../../types/offer';
import Tabs from '../../components/tabs/tabs';
import { useAppSelector } from '../../hooks/index';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../common/const';
import { AuthorizationStatus } from '../../common/const';

type MainPageProps = {
  offers: Offer[];
  citys: City[];
  authorizationStatus: AuthorizationStatus;
}

function MainPage({ offers, citys, authorizationStatus }: MainPageProps): JSX.Element {

  const activeTab = useAppSelector((state) => state.city);
  const currentOffers = offers.filter((offer) => offer.city.name === activeTab);


  const city = citys.find((item) => item.name === activeTab);

  if (city === undefined) {
    return <Navigate to={AppRoute.PageNotFound} replace />;
  }

  return (
    <div className="page page--gray page--main">

      <Header authorizationStatus={authorizationStatus} />


      <main className={`page__main page__main--index ${currentOffers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>

        <Tabs citys={citys} activeTab={activeTab} />

        <div className="cities">

          <OfferList city={city} currentOffers={currentOffers} activeTab={activeTab} />

        </div>
      </main>
    </div>
  );
}

export default MainPage;
