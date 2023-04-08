type SortItemProps = {
  activeItem: string;
  item: string;
}

function SortItem({activeItem, item, }:SortItemProps): JSX.Element {


  return (
    <li className={`places__option ${item === activeItem ? 'places__option--active' : ''}`} tabIndex={0}>{item}</li>
  );
}

export default SortItem;
