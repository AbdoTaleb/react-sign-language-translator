import React from 'react'

function ImageGallery(props) {

  return (
    <>
      {/* Loop through the object and add the image URl into list of images */}
      <div className="image-gallery">
        {props.images.map((image, index) => (
          <img key={index} src={props.images[index].url} alt={image.description} />
        ))}
      </div>
    </>

  );
}

export default ImageGallery;

