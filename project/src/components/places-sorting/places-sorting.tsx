import { useState } from 'react';
import { SortItems } from '../../common/const';
import SortItem from '../sort-item/sort-item';

function PlacesSorting(): JSX.Element {

  const [isClosed, setIsClosed] = useState<boolean>(true);
  const [activeItem] = useState<string>(SortItems.Popular);

  const isCloseHandler = () => {
    setIsClosed((prevIsClosed) => !prevIsClosed);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={isCloseHandler} >
        {activeItem}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isClosed === true ? '' : 'places__options--opened'}`}>

        {Object.values(SortItems).map((item, index) => (
          <SortItem key={String(item) + String(index)} activeItem={activeItem} item={item} />
        ))}

      </ul>
    </form>
  );
}

export default PlacesSorting;
