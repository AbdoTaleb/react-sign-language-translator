import React from 'react'
import { useForm } from 'react-hook-form'




function TranslateForm({onTranslate}) {
    const {register, handleSubmit} = useForm();


    const onSubmit = ({textToTranslate}) => {
        onTranslate(textToTranslate); 
        
    }


  


  return (
    <>
    
    

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
