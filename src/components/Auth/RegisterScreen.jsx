import { useContext, useState } from 'react'
import './LoginScreen.scss'
import { AuthContext } from '../../context/AuthContext'
import Footer from '../Footer/Footer'
import Header2 from '../Header2/Header2'


const RegisterScreen = () => {
    const { register } = useContext(AuthContext)

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
        register(values)
    }

    return (
        <div>
            <Header2 />
            <div className='auth-modal'>
            <div className="titulo_login">
                ¡REGISTRATE PARA ACCEDER A MOSSI MOTOS!
            </div>
            <div className="login_form">
                <form onSubmit={handleSubmit}>
                    <input
                        value={values.email}
                        onChange={handleInputChange}
                        type='email'
                        placeholder='Email'
                        className='form-control my-4'
                        name='email'
                    />
                    <input
                        value={values.email}
                        onChange={handleInputChange}
                        type='email'
                        placeholder='Repetir email'
                        className='form-control my-4'
                        name='email'
                    />
                    <input
                        value={values.password}
                        onChange={handleInputChange}
                        type='password'
                        placeholder='Contraseña'
                        className='form-control my-4'
                        name='password'
                    />
                    <input
                        value={values.password}
                        onChange={handleInputChange}
                        type='password'
                        placeholder='Repetir contraseña'
                        className='form-control my-1'
                        name='password'
                    />
                    
                </form>
                <div className="botonera">
                <button className='btn btn3' type='submit'>Registrarse</button>
                </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default RegisterScreen