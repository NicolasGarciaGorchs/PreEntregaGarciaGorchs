import React,{ useContext, useState } from 'react'
import './LoginScreen.scss'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import Header2 from '../Header2/Header2'
import Footer from '../Footer/Footer'

const LoginScreen = () => {
    const { login, googleLogin } = useContext(AuthContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
    }

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
                </form>
                </div>
                <div className="botonera">
                <button className='btn btn1' type='submit'>Iniciar sesión</button>
                <div className="padding_reg">
                No tenés cuenta?
                </div>
                <Link className="style_reg" to="/register">Click Aquí</Link>
                <button className='btn btn2' onClick={googleLogin}>Iniciar sesión con Google</button>
                </div>
            <Footer />
        </div>
    )
}

export default LoginScreen