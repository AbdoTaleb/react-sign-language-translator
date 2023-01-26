import React, { useState } from 'react';

function ImageGallery(props) {
  const [images] = useState(props.images);

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image.url} alt={image.description} />
      ))}

    </div>
  );
}

export default ImageGallery;