import '../Repuestos/Repuestos.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ContenidoRepuestos from './ContenidoRepuestos/ContenidoRepuestos'


const Repuestos = () => {
    return (
        <div>
        <Header/>
        <ContenidoRepuestos/>
        <ItemListContainer/>
        <Footer/>
        </div>
    )
}

export default Repuestos