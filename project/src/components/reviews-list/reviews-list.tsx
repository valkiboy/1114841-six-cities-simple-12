import ReviewForm from '../../components/review-form/review-form';
import { Review } from '../../types/review';
import ReviewItem from '../review-item/review-item';
import { AuthorizationStatus } from '../../common/const';
import { useAppSelector } from '../../hooks/index';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';

type ReviewsListProps = {
  reviews: Review[];
  currentOfferId: number;
}

function ReviewsList({ reviews, currentOfferId }: ReviewsListProps): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">

        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}

      </ul>
      {authorizationStatus === AuthorizationStatus.Auth
        ? <ReviewForm currentOfferId={currentOfferId} /> : ''}


    </section>
  );
}

export default ReviewsList;
