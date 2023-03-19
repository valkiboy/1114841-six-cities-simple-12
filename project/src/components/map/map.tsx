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
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ offers, city, activeItem }: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);


  useEffect(() => {
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
    }
  }, [map, offers, activeItem]);


  return (
    <section className="cities__map map" ref={mapRef} style={{width: '500px'}} ></section>
  );
}

export default Map;
