import { Link } from 'react-router-dom';
import { Place } from '../../types/place';
import { generatePath } from 'react-router-dom';
import Mark from '../mark/mark';
import { useState } from 'react';

type PlaceCardProps = {
  apartment: Place;
};

const urlOffer = {
  offer:'/offer/:id'
};


function PlaceCard({ apartment }: PlaceCardProps): JSX.Element {
  const { id, src, price, title, type, premium } = apartment;
  const [card, setCard] = useState({});

  const mouseOverHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setCard(event.currentTarget);

    console.log('card', card);
  };

  return (
    <article onMouseOver={mouseOverHandler} className="cities__card place-card">

      {premium === true && <Mark /> }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to='/offer/:id'>
          <img className="place-card__image" src={src[0]} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(urlOffer.offer,{id:id})}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
