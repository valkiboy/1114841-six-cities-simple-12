import { City } from '../../types/offer';

type TabsItemProps = {
  city: City;
  activeItem: string;
  setActiveItem(item: string): void;
}

function TabsItem({ city, activeItem, setActiveItem }: TabsItemProps): JSX.Element {
  // TODO не забыть стереть
  // eslint-disable-next-line
  console.log('city.name', city.name)
  // eslint-disable-next-line
  console.log('activeItem', activeItem)
  return (
    <li className="locations__item" onClick={() => setActiveItem(city.name)}>
      <a className={`locations__item-link tabs__item ${city.name === activeItem ? 'tabs__item--active' : ''}`} >
        <span>{city.name}</span>
      </a>
    </li>
  );
}

export default TabsItem;
