type ItemProps = {
  item: string;
}

function PropertyItem({item}: ItemProps): JSX.Element {
  return (
    <li className="property__inside-item">
      {item}
    </li>
  );
}

export default PropertyItem;
