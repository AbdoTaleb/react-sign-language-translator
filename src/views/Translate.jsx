import React from 'react'
import TranslateForm from '../components/Translations/TranslateForm';
import withAuth from '../hoc/withAuth'

function Translate() {
  // const handleTranslateClick = (textToTranslate) => {
  //   console.log(textToTranslate);
  // } 
  return (
    <>
        <h1>Translate</h1>
        {/* <input placeholder='enter text here...'></input>
        <button onClick={handleTranslateClick}>Translate</button> */}
        <section id="text-to-translate">
          <TranslateForm></TranslateForm>

        </section>
      
    </>
  )
}

export default withAuth(Translate)
