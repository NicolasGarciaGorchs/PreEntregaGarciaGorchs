import {Link} from 'react-router-dom'
import '../Header/Header.css'


const Header = () => {

    return (
    <header className="styleNavbar">
      <div className="container">   
        <div>
          <Link className="navbar-brand" to="/">
            <img className="sizeLogo" src='/logogris.png' alt="MossiMotosLogo" />
          </Link>
        </div>
        
        <nav className="navbar navbar_medio navbar-expand-lg navbar-dark text-bg-black">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto  ">
              <li className="nav-item">
              <Link className="nav-link style_nav " to="/repuestos">Repuestos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link style_nav" to="/turnosonline">Turnos Online</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link style_nav" to="/sucursales">Sucursales</Link>
              </li>
            </ul>
          </div>
        </nav>
        </div>
    </header>
    )
}

export default Header