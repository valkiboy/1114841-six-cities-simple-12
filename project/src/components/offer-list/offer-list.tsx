import OfferCard from '../offer-card/offer-card';
import { Offer, City } from '../../types/offer';
import { useState } from 'react';
import NoPlaces from '../no-places/no-places';
import Map from '../map/map';

type ListProps = {
  offers: Offer[];
  city: City;
}

function OfferList({ offers, city }: ListProps): JSX.Element {
  const [activeItem, setActiveItem] = useState<number>(-1);
  const classNaming = 'cities';

  return (
    <div className="cities__places-container container">
      {Array.isArray(offers) && offers.length > 0 ? (
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found"> {offers.length} places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">

            {offers.map((offer) => (
              <OfferCard setActiveItem={setActiveItem} key={offer.id} offer={offer} />)
            )}

          </div>
        </section>) : <NoPlaces />}
      <div className="cities__right-section">

        <Map offers={offers} city={city} activeItem={activeItem} classNaming={classNaming} />

      </div>
    </div>
  );
}

export default OfferList;
