import { Offer, City } from '../../types/offer';
import { useRef, useEffect } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../common/const';
import useMap from '../../hooks/useMap/useMap';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';


type MapProps = {
  offers: Offer[];
  city: City;
  activeItem: number | undefined;
  classNaming: string;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [27, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [27, 39]
});

function Map({ offers, city, activeItem, classNaming }: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);


  useEffect(() => {
    //TODO
    // eslint-disable-next-line
    console.log('отработал юзЭффект')
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            activeItem !== undefined && offer.id === activeItem
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
      //TODO
      return () => {
        // eslint-disable-next-line
        console.log('отработал ретурн')
      };
    }


  }, [map, offers, activeItem, city]);


  return (
    <section className={`${classNaming}__map map`} ref={mapRef} ></section>
  );
}

export default Map;
