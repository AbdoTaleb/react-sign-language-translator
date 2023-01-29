import React from 'react'
import { NavLink } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link} from 'react-router-dom'

import ImageGallery from './ImageGallery';
import Translate from '../../views/Translate';
function TranslateForm({ onTranslate }) {
  const { register, handleSubmit } = useForm();


  const onSubmit = ({ textToTranslate }) => {
    onTranslate(textToTranslate);

  }

function TranslateForm({ onTranslate }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ textToTranslate }) => {
    onTranslate(textToTranslate);


  }
}
  return (
    <>
  

      <section className="text-center">
        <div className="p-5 bg-image mb-300px"
          style={{
            backgroundImage: `url("https://makeitfable.com/wp-content/uploads/2022/02/2022-02-17-Sign-Language-1200x654.png")`,

            height: '350px',
          }}
        ></div>
        

        <div className="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            marginTop: '-100px',
            color: 'hsla(0, 0%, 100%, 0.8)',
            backdropFilter: 'blur(30px)'
          }}
        >

           <button type="button" className="btn btn-info btn-lg m-2 btn-block"> <Link to="/profile">Profile</Link></button>
          <div className="card-body py-5 px-md-5" style={{
            background: 'linear-gradient(to left, #3a6186 , #89253e)'
          }}>
           
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="row justify-content-md-center">
                <div class="col-md-6 form-line">
                  <h1 class="section-header" > <span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Translate</span> your text to SIGNS</h1>
                  <h3>Write and click <b>TRANSLATE</b></h3>
                  <label htmlFor='text-to-translate'></label>
                  <input type="text" {...register('textToTranslate')} placeholder='enter text here...'></input>
                </div>
              </div>
              <button className='btn btn-dark mt-2' type='submit'>Translate</button>
              
            </form>
            


          </div>
        </div>
      </section>



    </>
  )
}

export default TranslateForm
