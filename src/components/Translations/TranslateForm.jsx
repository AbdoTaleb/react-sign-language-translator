import React from 'react'
import { NavLink } from 'react-bootstrap';
import { useForm } from 'react-hook-form'

import ImageGallery from './ImageGallery';
import Translate from '../../views/Translate';
function TranslateForm({ onTranslate }) {
  const { register, handleSubmit } = useForm();


  const onSubmit = ({ textToTranslate }) => {
    onTranslate(textToTranslate);

  }





  return (
    <>
      <section className="text-center">
        <div className="p-5 bg-image mb-300px"
          style={{
            backgroundImage: `url("https://makeitfable.com/wp-content/uploads/2022/02/2022-02-17-Sign-Language-1200x654.png")`,
            height: '500px',
          }}
        ></div>
        <div className="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            marginTop: '-100px',
            color: 'hsla(0, 0%, 100%, 0.8)',
            backdropFilter: 'blur(30px)'
          }}
        >
          <div className="card-body py-5 px-md-5" style={{
            background: 'linear-gradient(to left, #3a6186 , #89253e)'
          }}>
            <div class="container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="row justify-content-md-center">
                <div class="col-md-3 form-line">
                  
                  <textarea class="form-control" id="original" placeholder="Enter Your Text" {...register('textToTranslate')}></textarea>
                </div>
                <div class="col-md-9 form-line">
                  
                  <textarea class="form-control" id="translated" placeholder="Translated signs will be here"><ImageGallery /></textarea>
                </div>
              </div>
              <button type='submit'>Translate</button>
            </form>
            </div>


            {/* <div class="contact-section">
              <div class="container">
                <form>
                  <div class="col-md-6 form-line">
                    <div class="form-group">
                      <textarea class="form-control" id="original" placeholder="Enter Your Text"></textarea>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <textarea class="form-control" id="translated" placeholder="Translated signs will be here"></textarea>
                    </div>
                    <div>
                      <button type="button" class="btn btn-default submit"><i class="fa fa-globe" aria-hidden="true"></i>   translate</button>
                    </div>

                  </div>
                </form>
              </div></div> */}



            <div>
              <button type="button" class="btn btn-success btn-lg m-2 btn-block"> <NavLink to="/profile">Profile</NavLink></button>
              <button type="button" class="btn btn-warning btn-lg m-2 btn-block">Clear history</button>
              <button type="button" class="btn btn-info btn-lg m-2 btn-block">vvvv</button>
              <button type="button" class="btn btn-danger btn-lg m-2 btn-block">Logout</button>
            </div>








          </div>
        </div>
      </section>

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
