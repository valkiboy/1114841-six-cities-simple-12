import OfferList from '../../components/offer-list/offer-list';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import { useAppSelector } from '../../hooks/index';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../common/const';
import { getOffers } from '../../store/offers-data/offers-data.selectors';
import { getCity, getSortingOffers, getTypeSorting } from '../../store/sorting-process/sorting-process.selectors';
import { Helmet } from 'react-helmet-async';

function MainPage(): JSX.Element {

  const activeTab = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const currentOffers = offers.filter((offer) => offer.city.name === activeTab);
  const currentSort = useAppSelector(getTypeSorting);
  const sortedOffers = getSortingOffers(currentSort, currentOffers);

  const offer = currentOffers.find((currentOffer) => currentOffer.city.name === activeTab);
  const city = offer?.city;


  if (city === undefined) {
    return <Navigate to={AppRoute.PageNotFound} replace />;
  }

  return (
    <div className="page page--gray page--main">

      <Header />


      <main className={`page__main page__main--index ${currentOffers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <Helmet>
          <title>six cities simple: main</title>
        </Helmet>
        <h1 className="visually-hidden">Cities</h1>

        <Tabs activeTab={activeTab} />

        <div className="cities">

          <OfferList city={city} sortedOffers={sortedOffers} activeTab={activeTab} />

        </div>
      </main>
    </div>
  );
}

export default MainPage;
