import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/index/index';
import { changeCity } from '../../store/action';

type TabsItemProps = {
  city: string;
  activeTab: string;
}

function TabsItem({ city, activeTab }: TabsItemProps): JSX.Element {

  const dispatch = useAppDispatch();

  const changeCityHandler = () => {
    dispatch(changeCity(city));
  };

  return (
    <li className="locations__item" onClick={changeCityHandler}>
      <Link to={'/'} className={`locations__item-link tabs__item ${city === activeTab ? 'tabs__item--active' : ''}`} >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default TabsItem;
