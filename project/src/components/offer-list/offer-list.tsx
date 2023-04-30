import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/offer';
import { City } from '../../types/offer';
import { useState } from 'react';
import NoPlaces from '../no-places/no-places';
import Map from '../map/map';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../common/const';
import PlacesSorting from '../places-sorting/places-sorting';

type ListProps = {
  city: City;
  sortedOffers: Offer[];
  activeTab: string;
}

function OfferList({ city, sortedOffers, activeTab }: ListProps): JSX.Element {

  const [activeItem, setActiveItem] = useState<number | null>(-1);
  const classNaming = 'cities';


  if (activeItem === null) {
    return <Navigate to={AppRoute.PageNotFound} replace />;
  }

  return (
    <div className={`cities__places-container container ${sortedOffers.length === 0 ? 'cities__places-container--empty' : ''}`}>
      {sortedOffers.length > 0 ? (
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found"> {sortedOffers.length} places to stay in {activeTab}</b>

          <PlacesSorting />

          <div className="cities__places-list places__list tabs__content">

            {sortedOffers.map((offer) => (
              <OfferCard setActiveItem={setActiveItem} key={offer.id} offer={offer} />)
            )}

          </div>
        </section>) : <NoPlaces />}
      <div className="cities__right-section">
        {sortedOffers.length > 0 ? (
          <Map offers={sortedOffers} city={city} activeItem={activeItem} classNaming={classNaming} />
        ) : ''}
      </div>
    </div>
  );
}

export default OfferList;
