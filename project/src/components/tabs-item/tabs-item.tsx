import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/index/index';
import { changeCity } from '../../store/action';
import { City } from '../../types/offer';

type TabsItemProps = {
  city: City;
  activeTab: string;
}

function TabsItem({ city, activeTab }: TabsItemProps): JSX.Element {

  const dispatch = useAppDispatch();

  const changeCityHandler = () => {
    dispatch(changeCity(city.name));
  };

  return (
    <li className="locations__item" onClick={changeCityHandler}>
      <Link to={'/'} className={`locations__item-link tabs__item ${city.name === activeTab ? 'tabs__item--active' : ''}`} >
        <span>{city.name}</span>
      </Link>
    </li>
  );
}

export default TabsItem;
