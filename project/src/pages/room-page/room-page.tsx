import { Helmet } from 'react-helmet-async';
import { useParams, Navigate } from 'react-router-dom';
import Header from '../../components/header/header';
import PropertyImage from '../../components/property-image/property-image';
import PropertyItem from '../../components/propery-item/property-item';
import changeRating from '../../common/utils';
import {AppRoute, MAX_NUMBER_IMAGE, MAX_NUMBER_REVIEWS } from '../../common/const';
import Map from '../../components/map/map';
import PlacesList from '../../components/places-list/places-list';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { useEffect } from 'react';
import { fetchCurrentOfferAction, fetchCurrentReviewsAction, fetchOffersNearbyAction } from '../../store/api-actions';
import { Offer } from '../../types/offer';
import LoadingScreen from '../loading-screen/loading-screen';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { getCurrentOffer, getOffersNearby, getCurrentOffersDataLoading, getCurrentReviews } from '../../store/offers-data/offers-data.selectors';

function RoomPage(): JSX.Element {

  const offerId = useParams<string>();
  const classNaming = 'property';
  const currentOfferId = Number(offerId.id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentOfferAction(currentOfferId));
    dispatch(fetchOffersNearbyAction(currentOfferId));
    dispatch(fetchCurrentReviewsAction(currentOfferId));
  }, [currentOfferId, dispatch]);

  const currentOffer = useAppSelector(getCurrentOffer);
  const offersNearby = useAppSelector(getOffersNearby);
  const isCurrentOfferLoading = useAppSelector(getCurrentOffersDataLoading);
  const currentReviews = useAppSelector(getCurrentReviews);


  let sortingReviews = currentReviews.slice();
  sortingReviews = sortingReviews.sort((b, a) => new Date(a.date).getTime() - new Date(b.date).getTime()).slice(0, MAX_NUMBER_REVIEWS);


  let allOffers: Offer[] = [];

  if (offersNearby !== null && currentOffer !== null) {
    allOffers = [...offersNearby, currentOffer];
  }

  if (isCurrentOfferLoading) {
    return < LoadingScreen />;
  }

  if (currentOffer === null) {
    return <Navigate to={AppRoute.PageNotFound} replace />;
  }

  const { rating, title, type, bedrooms, maxAdults, host, goods, images, isPremium, id, city, price, description } = currentOffer;

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
              )).slice(0, MAX_NUMBER_IMAGE)}

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
                <span className="property__rating-value rating__value">{rating}</span>
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
                <b className="property__price-value">&euro;{price}</b>
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
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : ''} `}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro ?
                    <span className="property__user-status">
                      Pro
                    </span> : ''}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>

              <ReviewsList reviews={sortingReviews} currentOfferId={currentOfferId} />

            </div>
          </div>

          <Map offers={allOffers} classNaming={classNaming} city={city} activeItem={id} />

        </section>
        <div className="container">

          <PlacesList offers={offersNearby} num={id} />

        </div>
      </main>
    </div>
  );
}

export default RoomPage;
