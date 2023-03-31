import { Cities } from '../../common/const';
import TabsItem from '../tabs-item/tabs-item';


type TabsProps = {
  activeTab: string;
}


function Tabs({activeTab }: TabsProps): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {Object.values(Cities).map((city: string, index: number) => (
            <TabsItem key={String(city) + String(index)} city={city} activeTab={activeTab} />
          ))}

        </ul>
      </section>
    </div>
  );
}

export default Tabs;
