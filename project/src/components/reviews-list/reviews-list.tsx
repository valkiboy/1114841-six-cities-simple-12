import ReviewForm from '../../components/review-form/review-form';
import { Reviews } from '../../types/offer';
import ReviewItem from './review-item/review-item';

type ReviewsListProps = {
  reviews: Reviews[];
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">

        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}

      </ul>

      <ReviewForm />

    </section>
  )
}

export default ReviewsList;
