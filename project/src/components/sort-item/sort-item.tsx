type SortItemProps = {
  activeItem: string;
  item: string;
  isCloseHandler:() => void;
}

function SortItem({activeItem, item, isCloseHandler }:SortItemProps): JSX.Element {


  return (
    <li className={`places__option ${item === activeItem ? 'places__option--active' : ''}`} onClick={isCloseHandler} tabIndex={0}>{item}</li>
  );
}

export default SortItem;
