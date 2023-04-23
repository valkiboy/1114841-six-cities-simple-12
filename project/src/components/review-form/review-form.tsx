import { FormEvent, Fragment, useEffect, useState } from 'react';
import { UserReview } from '../../types/user-review';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { reviewAction } from '../../store/api-actions';
import { getReviewIsLoading, getTextClearStatus } from '../../store/offers-data/offers-data.selectors';


type ReviewsFormProps = {
  currentOfferId: number;
}

function ReviewForm({ currentOfferId }: ReviewsFormProps): JSX.Element {

  const [value, setValue] = useState<string>('');
  const [assessment, setAssessment] = useState<string>('0');

  const isLoading = useAppSelector(getReviewIsLoading);
  const textClear = useAppSelector(getTextClearStatus);


  useEffect(() => {
    if (textClear === true) {
      setValue('');
      setAssessment('0');
    }
  }, [textClear]);

  const textareaChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(event.target.value);
  };

  const assessmentChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAssessment(event.target.value);
  };

  const dispatch = useAppDispatch();

  const onSubmit = (userReview: UserReview) => {
    dispatch(reviewAction(userReview));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (value !== null && assessment !== null) {
      onSubmit({
        comment: value,
        rating: Number(assessment),
        id: currentOfferId,
      });
    }
  };

  const titles: string[] = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

  // TODO строка для линтера
  // eslint-disable-next-line
  // console.log('Number(assessment)', Number(assessment))

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit} >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {titles.map((title, index) => (
          <Fragment key={title}>
            <input
              onChange={assessmentChangeHandler}
              className="form__rating-input visually-hidden"
              name="rating"
              value={titles.length - index}
              id={`${titles.length - index}-stars`}
              checked={assessment === `${titles.length - index}`}
              type="radio" disabled={isLoading}
            />
            <label htmlFor={`${titles.length - index}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>)
        )}
      </div>
      <textarea onChange={textareaChangeHandler} value={value} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" disabled={isLoading}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!(value.length > 49 && value.length < 301 && Number(assessment) > 0) || isLoading} >Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
