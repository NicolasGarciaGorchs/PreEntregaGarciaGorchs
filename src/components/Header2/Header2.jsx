import { Link } from 'react-router-dom'
import './Header2.scss'



const Header2 = () => {

    return (
        <header className="styleNavbar">
            <div className="container">
                <div>
                    <Link className="navbar-brand" to="/login">
                        <img className="sizeLogo" src='/logogris.png' alt="MossiMotosLogo" />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header2