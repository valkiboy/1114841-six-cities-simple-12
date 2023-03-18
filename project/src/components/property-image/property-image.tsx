type FotoProps = {
  image: string;
}

function PropertyImage({image}:FotoProps):JSX.Element {

  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="studio" />
    </div>
  );
}

export default PropertyImage;
