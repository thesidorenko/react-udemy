function ImageShow({ image }) {

  return (
    <div>
      <img className="image" src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;