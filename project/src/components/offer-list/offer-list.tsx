import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/offer';
import { useState } from 'react';
import NoPlaces from '../no-places/no-places';

type ListProps = {
  apartments: Offer[];
}

function OfferList({ apartments }: ListProps): JSX.Element {
  // const [activeItem, setActiveItem] = useState(-1);
  const [, setActiveItem] = useState(-1);

  // console.log('activeItem', activeItem);

  return (
    <div className="cities__places-container container">
      {Array.isArray(apartments) && apartments.length > 0 ? (
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found"> {apartments.length} places to stay in Amsterdam</b>
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

            {apartments.map((apartment) => (
              <OfferCard setActiveItem={setActiveItem} key={apartment.id} apartment={apartment} />)
            )}

          </div>
        </section>) : <NoPlaces />}
      <div className="cities__right-section">
        <section className="cities__map map"></section>
      </div>
    </div>
  );
}

export default OfferList;
