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
        <div className=''>
                <Header2 />
                <div className="">
                ¡LOGEATE E INGRESÁ A MOSSI MOTOS!
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        value={values.email}
                        onChange={handleInputChange}
                        type='email'
                        placeholder='Email'
                        className='form-control my-2'
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
                    <button className='btn btn-primary' type='submit'>Iniciar sesión</button>
                    <Link to="/register">Registrarme</Link>
                </form>
                <button className='btn btn-primary' onClick={googleLogin}>Iniciar sesión con Google</button>
            <Footer />
        </div>
    )
}

export default LoginScreen