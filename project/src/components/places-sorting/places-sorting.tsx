import { RefObject, memo, useEffect, useRef, useState } from 'react';
import { SortTypes } from '../../common/const';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import SortItem from '../sort-item/sort-item';
import { getTypeSorting } from '../../store/sorting-process/sorting-process.selectors';
import { changeSort } from '../../store/sorting-process/sorting-process';

function PlacesSorting(): JSX.Element {

  const [isClosed, setIsClosed] = useState<boolean>(true);
  const activeItem = useAppSelector(getTypeSorting);
  const sortRef: RefObject<HTMLSpanElement> = useRef(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const closeSortTypt = (evt:MouseEvent) => {
      if (!sortRef.current || !(evt.target instanceof HTMLElement)) {
        return;
      }

      if (!sortRef.current.contains(evt.target)) {
        setIsClosed(true);
      }
    };

    document.addEventListener('click', closeSortTypt);

    return () => {
      document.removeEventListener('click', closeSortTypt);
    };
  });

  const getChangeSort = (e: React.SyntheticEvent): void => {
    const target = e.target as HTMLUListElement;
    target.textContent && dispatch(changeSort(target.textContent));
  };

  const isCloseHandler = () => {
    setIsClosed((prevIsClosed) => !prevIsClosed);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={isCloseHandler} ref={sortRef} >
        {activeItem}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isClosed === true ? '' : 'places__options--opened'}`} onClick={(e)=>getChangeSort(e)} >

        {Object.values(SortTypes).map((item, index) => (
          <SortItem key={String(item) + String(index)} activeItem={activeItem} item={item}/>
        ))}

      </ul>
    </form>
  );
}

export default memo(PlacesSorting);
