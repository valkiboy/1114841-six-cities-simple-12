import { Helmet } from 'react-helmet-async';
import { useParams, Navigate } from 'react-router-dom';
import Header from '../../components/header/header';
import PropertyImage from '../../components/property-image/property-image';
import PropertyItem from '../../components/propery-item/property-item';
import changeRating from '../../common/utils';
import { AppRoute } from '../../common/const';
// import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import PlacesList from '../../components/places-list/places-list';
import { useAppSelector } from '../../hooks/index';

function RoomPage(): JSX.Element {

  const offers = useAppSelector((state) => state.offers);
  const idRoom = useParams<string>();
  const offer = offers.find((item) => String(item.id) === String(idRoom.id));
  const classNaming = 'property';

  if (offer === undefined) {
    return <Navigate to={AppRoute.PageNotFound} replace />;
  }

  const { rating, title, type, bedrooms, maxAdults, host, goods, images, isPremium, id, city } = offer;

  return (
    <div className="page">

      <Header />

      <main className="page__main page__main--property">
        <Helmet>
          <title>six cities simple: property</title>
        </Helmet>
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">

              {images.map((image, index) => (
                <PropertyImage key={String(image) + String(index)} image={image} />
              ))}

            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">

              {isPremium === true &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}

              <div className="property__name-wrapper">
                <h1 className="property__name">

                  {title}

                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: changeRating(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">

                  {type}

                </li>
                <li className="property__feature property__feature--bedrooms">

                  {bedrooms} {bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}

                </li>
                <li className="property__feature property__feature--adults">

                  {maxAdults > 1 ? `Max ${maxAdults} adults` : `Max ${maxAdults} adult`}

                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">

                  {goods.map((item, index) => (
                    <PropertyItem key={String(item) + String(index)} item={item} />
                  ))}

                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    Pro
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>

              {/* <ReviewsList /> */}

            </div>
          </div>

          <Map offers={offers} classNaming={classNaming} city={city} activeItem={id} />

        </section>
        <div className="container">

          <PlacesList offers={offers} num={id} />

        </div>
      </main>
    </div>
  );
}

export default RoomPage;
