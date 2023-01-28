import React, { useEffect, useState } from 'react';

function ImageGallery(props) {

  return (
    <>
      <div className="image-gallery">
        {props.images.map((image, index) => (
          <img key={index} src={props.images[index].url} alt={image.description} />
        ))}

      </div>


    </>

  );
}

export default ImageGallery;

