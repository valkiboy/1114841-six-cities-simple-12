import { Fragment, useState } from 'react';

function ReviewForm(): JSX.Element {
  const [value, setValue] = useState<string>('');
  // const [rating, setRating] = useState('0');
  const [, setRating] = useState<string>('0');


  const textareaChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(event.target.value);
  };

  const ratingChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRating(event.target.value);
  };

  const titles: string[] = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {titles.map((title, index) => (
          <Fragment key={title}>
            <input onChange={ratingChangeHandler} className="form__rating-input visually-hidden" name="rating" value={titles.length - index} id={`${titles.length - index}-stars`} type="radio" />
            <label htmlFor={`${titles.length - index}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>)
        )}
      </div>
      <textarea onChange={textareaChangeHandler} value={value} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
