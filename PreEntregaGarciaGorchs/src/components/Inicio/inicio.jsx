import Carousel from './Carousel/Carousel';
import ContenidoPrincipal from './ContenidoPrincipal/ContenidoPrincipal';
import Header from '../Header/Header'
import Sponsors from './Sponsors/Sponsors'
import Footer from '../Footer/Footer' 


const Inicio = () => {
    return (
        <div>
        <Header/>
        <ContenidoPrincipal/>
        <Sponsors/>
        <Carousel/>
        <Footer/>
        </div>
    )
}

export default Inicio