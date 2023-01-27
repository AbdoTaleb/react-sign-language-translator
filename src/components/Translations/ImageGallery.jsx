import React, { useEffect, useState } from 'react';

function ImageGallery(props) {
  //const [images, setImages] = useState(props.images);
  //const [text] = useState(props.myText);
  console.log("***************")
  console.log(props.images)
  // console.log("/*/*/*/ "+props.images[0].url)
  for (const value of props.images.keys()){
    console.log("value " + value)
    
  }
  // console.log("typeof --> " + typeof url)
  
  return (
    <>
    <div className="image-gallery">
      {props.images.map((image, index) => (
        
        <img key={index} src={props.images[index].url} alt={image.description} />
      ))}
     
    </div>
    
    <p>-----</p>
      {/* <p>{url}</p> */}
    </>
    
  );
}

export default ImageGallery;

