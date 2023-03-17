type FotoProps = {
  foto: string;
}

function PropertyFoto({foto}:FotoProps):JSX.Element {

  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={foto} alt="studio" />
    </div>
  );
}

export default PropertyFoto;
