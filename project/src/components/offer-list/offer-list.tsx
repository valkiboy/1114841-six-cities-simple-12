import OfferCard from '../offer-card/offer-card';
import { Offer, City } from '../../types/offer';
import { useState } from 'react';
import NoPlaces from '../no-places/no-places';
import Map from '../map/map';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../common/const';
import PlacesSorting from '../places-sorting/places-sorting';

type ListProps = {
  city: City;
  currentOffers: Offer[];
  activeTab: string;
}

function OfferList({ city, currentOffers, activeTab }: ListProps): JSX.Element {

  const [activeItem, setActiveItem] = useState<number | null>(-1);
  const classNaming = 'cities';

  if (activeItem === null) {
    return <Navigate to={AppRoute.PageNotFound} />;
  }


  // TODO строка для линтера
  // eslint-disable-next-line
  // console.log('city', city)

  return (
    <div className={`cities__places-container container ${currentOffers.length === 0 ? 'cities__places-container--empty' : ''}`}>
      {currentOffers.length > 0 ? (
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found"> {currentOffers.length} places to stay in {activeTab}</b>

          <PlacesSorting />

          <div className="cities__places-list places__list tabs__content">

            {currentOffers.map((offer) => (
              <OfferCard setActiveItem={setActiveItem} key={offer.id} offer={offer} />)
            )}

          </div>
        </section>) : <NoPlaces />}
      <div className="cities__right-section">
        {currentOffers.length > 0 ? (
          <Map offers={currentOffers} city={city} activeItem={activeItem} classNaming={classNaming} />
        ) : ''}
      </div>
    </div>
  );
}

export default OfferList;
