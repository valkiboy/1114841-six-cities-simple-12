import OfferList from '../../components/offer-list/offer-list';
import Logo from '../../components/logo/logo';
import { Offer, City } from '../../types/offer';
import Tabs from '../../components/tabs/tabs';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { changeCurrentOffers } from '../../store/action';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../common/const';
import { useEffect } from 'react';

type MainPageProps = {
  offers: Offer[];
  citys: City[];
}

function MainPage({ offers, citys }: MainPageProps): JSX.Element {

  const activeTab = useAppSelector((state) => state.city);
  const currentOffers = offers.filter((offer) => offer.city.name === activeTab);
  const dispatch = useAppDispatch();

  useEffect(() => {

    dispatch(changeCurrentOffers(currentOffers.length));

  }, [currentOffers.length, dispatch]);

  const city = citys.find((item) => item.name === activeTab);

  if (city === undefined) {
    return <Navigate to={AppRoute.PageNotFound} />;
  }

  return (
    <div className="page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
