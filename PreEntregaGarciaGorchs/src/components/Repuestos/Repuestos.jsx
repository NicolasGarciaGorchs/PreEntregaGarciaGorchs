import '../Repuestos/Repuestos.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ContenidoRepuestos from './ContenidoRepuestos/ContenidoRepuestos'
// import Buscador from '/Buscador/Buscador'


const Repuestos = () => {
    return (
        <div>
        <Header/>
        {/* <Buscador/> */}
        <ContenidoRepuestos/>
        <ItemListContainer/>
        <Footer/>
        </div>
    )
}

export default Repuestos