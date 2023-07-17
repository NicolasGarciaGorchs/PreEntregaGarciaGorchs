import { useContext, useState } from 'react'
import './LoginScreen.scss'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
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
                <h2>¡REGISTRATE PARA ACCEDER A MOSSI MOTOS!</h2>
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
                    <button className='btn btn-primary' type='submit'>Registrarse</button>
                    <Link to="/login">Ya estoy registrado</Link>
                </form>
                <Footer />
            </div>
        </div>
    )
}

export default RegisterScreen