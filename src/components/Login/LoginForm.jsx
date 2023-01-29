import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user';
import { storageSave } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { STORAGE_KEY_USER } from '../../const/storageKey'

import "bootstrap/dist/css/bootstrap.min.css"

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const usernameConfig = {
    required: true,
    minLength: 3
}


function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, setUser } = useUser();
    const navigate = useNavigate();
    // local State
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null);


    //Side Effect
    useEffect(() => {
        if (user !== null) {
            navigate('/profile')
        }
        console.log('user has changed', user)
    }, [user, navigate])


    // Event handle
    const onSubmit = async ({ username }) => {
        setLoading(true);
        const [error, userResponse] = await loginUser(username);
        if (error !== null) {
            setApiError(error);
        }
        if (userResponse !== null) {
            storageSave(STORAGE_KEY_USER, userResponse);
            setUser(userResponse);
        }
        setLoading(false);

    }


    const errorMessage = (() => {
        if (!errors.username) {
            return null;
        }
        if (errors.username.type === 'required') {
            return <span>Username is required</span>;
        }

        if (errors.username.type === 'minLength') {
            return <span>Username is too short (min. 3)</span>;
        }
    })()
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
                        
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="mb-5" style={{
                                    fontFamily: 'fantasy',
                                    color: 'rgb(255, 255, 255)',
                                    border: '2px black'
                                }}>Lost in Translation</h2>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-outline mb-4">
                                        <input type="text" id="form3Example3" className="form-control" placeholder='What is your name?' {...register('username', usernameConfig)} />
                                    </div>

                                    <p style={{
                                        fontFamily: 'serif',
                                        color: 'rgb(255, 255, 255)',
                                        fontSize: '1.5em'
                                    }}>{errorMessage}</p>

                                    <button type="submit" className="btn btn-primary btn-block mb-4">
                                        Continue
                                    </button>

                                    {loading && <p style={{
                                        fontFamily: 'serif',
                                        color: 'rgb(255, 255, 255)',
                                    }}>Logging in...</p>}

                                    {apiError && <p>{apiError}</p>}

                                    <div className="text-center">
                                        <h5 style={{
                                            fontFamily: 'serif',
                                            color: 'rgb(255, 255, 255)',
                                            border: '2px black'
                                        }}>Follow me on:</h5>

                                        <a href="https://github.com/AbdoTaleb/react-sign-language-translator">
                                            <FaGithub />
                                        </a>
                                        <a href="https://www.linkedin.com/in/abdo-taleb/">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <h1 color='blue'>What's your name?</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor='username'>Username</label>
                    <input type='text'
                        placeholder='Abdo Taleb'
                        {...register('username', usernameConfig)}></input>
                    {errorMessage}
                </fieldset>
                <Button variant="primary" type='submit' disabled={loading}>Continue</Button>
                {loading && <p>Logging in...</p>}
                {apiError && <p>{apiError}</p>}
            </form> */}

        </>
    )
}

export default LoginForm
