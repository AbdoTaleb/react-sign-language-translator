import React, { useState, useEffect } from 'react'
import { addTranslate } from '../api/translate';
import ImageGallery from '../components/Translations/ImageGallery';
import TranslateForm from '../components/Translations/TranslateForm';
import { STORAGE_KEY_USER } from '../const/storageKey';
import { useUser } from '../context/UserContext';
import withAuth from '../hoc/withAuth'
import { storageSave } from '../utils/storage';



// let signImages = [
//   {
//     name: "a",
//     image: "img/a.png"
//   },
//   {
//     name: "b",
//     image: "img/b.png"
//   },
//   {
//     name: "c",
//     image: "img/c.png"
//   },
//   {
//     name: "d",
//     image: "img/d.png"
//   },
  

// ]

const myImages = [
  { name: "a", url: 'img/a.png', description: 'Image 1' },
  { name: "b", url: 'img/b.png', description: 'Image 2' },
  { name: "c", url: 'img/c.png', description: 'Image 3' },
  { name: "d", url: 'img/d.png', description: 'Image 4' },
  { name: "e", url: 'img/e.png', description: 'Image 5' },
  { name: "f", url: 'img/f.png', description: 'Image 6' },
  { name: "g", url: 'img/g.png', description: 'Image 7' },
  { name: "h", url: 'img/h.png', description: 'Image 7' },
  { name: "i", url: 'img/i.png', description: 'Image 7' },
  { name: "j", url: 'img/j.png', description: 'Image 7' },
  { name: "k", url: 'img/k.png', description: 'Image 7' },
  { name: "l", url: 'img/l.png', description: 'Image 7' },
  { name: "m", url: 'img/m.png', description: 'Image 7' },
  { name: "n", url: 'img/n.png', description: 'Image 7' },
  { name: "o", url: 'img/o.png', description: 'Image 7' },
  { name: "p", url: 'img/p.png', description: 'Image 7' },
  { name: "q", url: 'img/q.png', description: 'Image 7' },
  { name: "r", url: 'img/r.png', description: 'Image 7' },
  { name: "s", url: 'img/s.png', description: 'Image 7' },
  { name: "t", url: 'img/t.png', description: 'Image 7' },
  { name: "u", url: 'img/u.png', description: 'Image 7' },
  { name: "v", url: 'img/v.png', description: 'Image 7' },
  { name: "w", url: 'img/w.png', description: 'Image 7' },
  { name: "x", url: 'img/x.png', description: 'Image 7' },
  { name: "y", url: 'img/y.png', description: 'Image 7' },
  { name: "z", url: 'img/z.png', description: 'Image 7' },

];

const mySigns = []
function Translate() {

  const {user, setUser} = useUser()
  const [text, setText] = useState('');
  // setSigns(signImages)
  

  const handleTranslateClick = async textToTranslate => {
    setText(textToTranslate)
    // console.log("textToTranslate  " + typeof textToTranslate)
    
    const [error, updateUser] =  await addTranslate(user, textToTranslate)
    if(error !== null){
      return
    }

    storageSave(STORAGE_KEY_USER, updateUser)
    setUser(updateUser)
    let i = 0;
    while(i <= textToTranslate.length){
      for (const value of myImages.values()) {
        //console.log(value.name)
        if(value.name === textToTranslate[i]){
          console.log("val is " + value.name + " and char is " + textToTranslate[i])
          console.log(value)
          mySigns.push(value)
          //setSigns(...signs, value)
        }
      }

      i++;
    }
    
    
  }

//   useEffect((text) => {
//     if(text === null){
//       console.log("nulkll")
//     }
    
//     console.log("from use effect " + typeof text)
//     // let i = 0;
//     // while(i < text.length){
//     //   for (const value of myImages.values()) {
//     //     //console.log(value.name)
//     //     if(value.name === text[i]){
//     //       console.log("val is " + value.name + " and char is " + text[i])
//     //       console.log(value)
//     //       mySigns.push(value)
//     //       //setSigns(...signs, value)
//     //     }
//     //   }

//     //   i++;
//     // }
// }, [text])
  

  return (
    <>
        <h1>Translate</h1>
        
        <section id="text-to-translate">
          <TranslateForm onTranslate={handleTranslateClick}></TranslateForm>

        </section>
        <ImageGallery images={mySigns} />
        
      
    </>
  )
}

export default withAuth(Translate)
