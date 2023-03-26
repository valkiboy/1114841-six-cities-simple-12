import { City } from '../../types/offer';
import TabsItem from '../tabs-item/tabs-item';


type TabsProps = {
  citys: City[];
  activeTab: string;
}

function Tabs({ citys, activeTab }: TabsProps): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {citys.map((city, index) => (
            <TabsItem key={String(city) + String(index)} city={city} activeTab={activeTab} />
          ))}

        </ul>
      </section>
    </div>
  );
}

export default Tabs;
