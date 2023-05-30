import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Header = () => {

    return (
    <header className="styleNavbar">
      <div className="container">   
        <div>
          <a className="navbar-brand" href="./home.html">
            <img className="sizeLogo" src='/logogris.png' alt="MossiMotosLogo" />
          </a>
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
              <a className="nav-link style_nav " href="./repuestos.html">Repuestos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link style_nav" href="./turnosonline.html">Turnos Online</a>
              </li>
              <li className="nav-item">
                <a className="nav-link style_nav" href="./sucursales.html">Sucursales</a>
              </li>
            </ul>
          </div>
        </nav>
        </div>
        <ItemListContainer mensaje="Mirá tus likes en tiempo real!" /> 
    </header>
    )
}

export default Header