import React, { useState, useEffect } from 'react'
import { addTranslate } from '../api/translate';
import ImageGallery from '../components/Translations/ImageGallery';
import TranslateForm from '../components/Translations/TranslateForm';
import { STORAGE_KEY_USER } from '../const/storageKey';
import { useUser } from '../context/UserContext';
import withAuth from '../hoc/withAuth'
import { storageSave } from '../utils/storage';
import "bootstrap/dist/css/bootstrap.min.css"

// Data, all images in both capital and small letter
const myImages = [
  { name: "a", url: 'img/a.png', description: 'a letter' },
  { name: "b", url: 'img/b.png', description: 'b letter' },
  { name: "c", url: 'img/c.png', description: 'c letter' },
  { name: "d", url: 'img/d.png', description: 'd letter' },
  { name: "e", url: 'img/e.png', description: 'e letter' },
  { name: "f", url: 'img/f.png', description: 'f letter' },
  { name: "g", url: 'img/g.png', description: 'g letter' },
  { name: "h", url: 'img/h.png', description: 'h letter' },
  { name: "i", url: 'img/i.png', description: 'i letter' },
  { name: "j", url: 'img/j.png', description: 'g letter' },
  { name: "k", url: 'img/k.png', description: 'k letter' },
  { name: "l", url: 'img/l.png', description: 'l letter' },
  { name: "m", url: 'img/m.png', description: 'm letter' },
  { name: "n", url: 'img/n.png', description: 'n letter' },
  { name: "o", url: 'img/o.png', description: 'o letter' },
  { name: "p", url: 'img/p.png', description: 'p letter' },
  { name: "q", url: 'img/q.png', description: 'q letter' },
  { name: "r", url: 'img/r.png', description: 'r letter' },
  { name: "s", url: 'img/s.png', description: 's letter' },
  { name: "t", url: 'img/t.png', description: 't letter' },
  { name: "u", url: 'img/u.png', description: 'u letter' },
  { name: "v", url: 'img/v.png', description: 'v letter' },
  { name: "w", url: 'img/w.png', description: 'w letter' },
  { name: "x", url: 'img/x.png', description: 'x letter' },
  { name: "y", url: 'img/y.png', description: 'y letter' },
  { name: "z", url: 'img/z.png', description: 'z letter' },
  { name: "A", url: 'img/a.png', description: 'A letter' },
  { name: "B", url: 'img/b.png', description: 'B letter' },
  { name: "C", url: 'img/c.png', description: 'C letter' },
  { name: "D", url: 'img/d.png', description: 'D letter' },
  { name: "E", url: 'img/e.png', description: 'E letter' },
  { name: "F", url: 'img/f.png', description: 'F letter' },
  { name: "G", url: 'img/g.png', description: 'G letter' },
  { name: "H", url: 'img/h.png', description: 'H letter' },
  { name: "I", url: 'img/i.png', description: 'I letter' },
  { name: "J", url: 'img/j.png', description: 'G letter' },
  { name: "K", url: 'img/k.png', description: 'K letter' },
  { name: "L", url: 'img/l.png', description: 'L letter' },
  { name: "M", url: 'img/m.png', description: 'M letter' },
  { name: "N", url: 'img/n.png', description: 'N letter' },
  { name: "O", url: 'img/o.png', description: 'O letter' },
  { name: "P", url: 'img/p.png', description: 'P letter' },
  { name: "Q", url: 'img/q.png', description: 'Q letter' },
  { name: "R", url: 'img/r.png', description: 'R letter' },
  { name: "S", url: 'img/s.png', description: 'S letter' },
  { name: "T", url: 'img/t.png', description: 'T letter' },
  { name: "U", url: 'img/u.png', description: 'U letter' },
  { name: "V", url: 'img/v.png', description: 'V letter' },
  { name: "W", url: 'img/w.png', description: 'W letter' },
  { name: "X", url: 'img/x.png', description: 'X letter' },
  { name: "Y", url: 'img/y.png', description: 'Y letter' },
  { name: "Z", url: 'img/z.png', description: 'Z letter' },
  { name: " ", url: 'img/white2.png', description: 'a letter' },
];


let mySigns = []
let myText = ''
function Translate() {
  const { user, setUser } = useUser()
  const [text, setText] = useState('');
  const handleTranslateClick = async textToTranslate => {
    myText = textToTranslate
    setText(myText)
    const [error, updateUser] = await addTranslate(user, textToTranslate)
    if (error !== null) {
      return
    }
    storageSave(STORAGE_KEY_USER, updateUser)
    setUser(updateUser)
  }
  // user useEffect to update when the any chanhe accur on the TEXT, 
  // Rerender the component and empty the array of the signs, och if the 
  // user enter a new text, will be add to the array "mySigns".
  useEffect(() => {
    setText(myText)
    let i = 0;
    mySigns = []
    while (i <= myText.length) {
      for (const value of myImages.keys()) {
        if (myImages[value].name === myText[i]) {
          mySigns.push(myImages[value])
        }
      }
      i++;
    }
  }, [text])

  return (
    <>
      <section id="text-to-translate">
        <TranslateForm onTranslate={handleTranslateClick}></TranslateForm>
      </section>
      <div class="card text-center">
        <div class="card-header">
          Translations will appear here.
        </div>
        <div class="card-body">
          <ImageGallery images={mySigns} />
        </div>
      </div>
    </>
  )
}

export default withAuth(Translate)
