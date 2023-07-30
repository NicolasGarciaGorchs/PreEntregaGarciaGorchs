import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header2 from '../Header2/Header2'
import './LoginScreen.scss'


const RegisterScreen = () => {
    const { register } = useContext(AuthContext)

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
            await register(values);
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };

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
                        value={values.password}
                        onChange={handleInputChange}
                        type='password'
                        placeholder='Contraseña'
                        className='form-control my-4'
                        name='password'
                    />
                     {error && (
                        <p className='texto_error'>Los datos ingresados se encuentran registrados o son incorrectos</p>
                    )}
                    <div className='botonera_registrarse'>
                    <button className='btn btn-success' type='submit'>Registrarse</button>
                    </div>
                </form>
                <div className="botonera_registrado">
                <Link to="/login"><button className='btn btn-primary'>Ya estoy registrado</button></Link>
                </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default RegisterScreen