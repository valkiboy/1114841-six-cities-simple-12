import ReviewForm from '../../components/review-form/review-form';
import { Reviews } from '../../types/reviews';
import ReviewItem from '../review-item/review-item';
import { AuthorizationStatus } from '../../common/const';

type ReviewsListProps = {
  reviews: Reviews[];
  authorizationStatus: AuthorizationStatus;
}

function ReviewsList({ reviews, authorizationStatus }: ReviewsListProps): JSX.Element {

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">

        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}

      </ul>
      {authorizationStatus === AuthorizationStatus.Auth
        ? <ReviewForm /> : ''}


    </section>
  );
}

export default ReviewsList;
