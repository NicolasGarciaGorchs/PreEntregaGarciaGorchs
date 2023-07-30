import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import Header2 from '../Header2/Header2'
import Footer from '../Footer/Footer'
import './LoginScreen.scss'

const LoginScreen = () => {
    const { login, googleLogin } = useContext(AuthContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);

        try {
            await login(values);
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     login(values)
    // }

    return (
        <div className='login'>
            <Header2 />
            <div className="titulo_login">
                ¡INGRESÁ PARA ACCEDER A LOS BENEFICIOS DE NUESTRA COMUNIDAD!
            </div>
            <div className="login_form">
                <form onSubmit={handleSubmit}>
                    <input
                        value={values.email}
                        onChange={handleInputChange}
                        type='email'
                        placeholder='Email'
                        className='form-control my-1'
                        name='email'
                    />
                    <input
                        value={values.password}
                        onChange={handleInputChange}
                        type='password'
                        placeholder='Contraseña'
                        className='form-control my-2'
                        name='password'
                    />

                    {error && (
                        <p className='texto_error'>Los datos ingresados son incorrectos</p>
                    )}

                    <div className="botonera">
                        <button className='btn btn-success' type='submit'>Iniciar sesión</button>
                    </div>
                </form>
                <div className="padding_reg">
                    No tenés cuenta?
                </div>
                <Link className="style_reg" to="/register">Click Aquí</Link>
                <button className='btn btn-primary' onClick={googleLogin}>Iniciar sesión con Google</button>
            </div>
            <Footer />
        </div>
    )
}

export default LoginScreen