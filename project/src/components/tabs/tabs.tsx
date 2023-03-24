import TabsItem from '../tabs-item/tabs-item';
import { City } from '../../types/offer';
import { useState } from 'react';

type TabsProps = {
  citys: City[];
}

function Tabs({ citys }: TabsProps): JSX.Element {

  const [activeItem, setActiveItem] = useState<string>('Paris');


  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {citys.map((city, index) => (
            <TabsItem key={String(city) + String(index)} city={city} activeItem={activeItem} setActiveItem={setActiveItem} />)
          )}

        </ul>
      </section>
    </div>
  );
}

export default Tabs;
