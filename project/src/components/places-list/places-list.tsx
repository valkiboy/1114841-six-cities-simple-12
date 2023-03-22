import { useState } from 'react';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';


type PlacesListProps = {
  offers: Offer[];
  num?: number;
}

function PlacesList({offers, num}: PlacesListProps): JSX.Element {

  // const [activeItem, setActiveItem] = useState<number>(-1);
  const [, setActiveItem] = useState<number>(-1);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">

        {offers.map((offer) => (
          offer.id !== num &&
          <OfferCard setActiveItem={setActiveItem} key={offer.id} offer={offer} />)
        )}

      </div>
    </section>
  );
}

export default PlacesList;
