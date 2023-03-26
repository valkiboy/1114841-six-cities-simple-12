

type SortItemProps = {
  activeItem: string;
  item: string;
  setActiveItem(item:string): void;
}

function SortItem({activeItem, item, setActiveItem }:SortItemProps): JSX.Element {

  const activeItemHandler = () => setActiveItem(item);


  return (
    <li className={`places__option ${item === activeItem ? 'places__option--active' : ''}`} onClick={activeItemHandler} tabIndex={0}>{item}</li>
  );
}

export default SortItem;
