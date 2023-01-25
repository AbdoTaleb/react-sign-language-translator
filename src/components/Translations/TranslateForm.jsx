import React from 'react'
import { useForm } from 'react-hook-form'

let letters = {
    a: "img/a.png",
    b: "img/b.png",
    c: "img/c.png",
    d: "img/d.png",
    e: "img/e.png",
    f: "img/f.png",

}
function TranslateForm() {
    const {register, handleSubmit} = useForm();


    const onSubmit = (data) => {
        console.log(data);
        console.log(letters.a);
    }


  return (
    <>
    <img src={letters.a} alt="gggg" />
    <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
            
            <label htmlFor='text-to-translate'>Text to translate</label>
            <input type="text" {...register('textToTranslate')} placeholder='enter text here...'></input>
        </fieldset>
        <button type='submit'>Translate</button>
    </form>
      
    </>
  )
}

export default TranslateForm
