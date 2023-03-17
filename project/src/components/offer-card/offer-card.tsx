import { generatePath, Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import Mark from '../mark/mark';
import changeRating from '../../utils';
import { AppRoute } from '../../const';

type CardProps = {
  offer: Offer;
  setActiveItem(id: number): void;
};

function OfferCard({ offer, setActiveItem }: CardProps): JSX.Element {
  const { id, src, price, title, type, premium, rating } = offer;

  const urlOffer = generatePath(AppRoute.Room, { id: `${id}` });

  return (
    <article onMouseOver={() => setActiveItem(id)} onMouseOut={() => setActiveItem(-1)} className="cities__card place-card">

      {premium === true && <Mark /> }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={urlOffer}>
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
            <span style={{width:changeRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={urlOffer}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
