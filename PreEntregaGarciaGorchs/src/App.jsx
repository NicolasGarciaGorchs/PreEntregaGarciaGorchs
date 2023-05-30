import Header from './components/Header/Header'
import ContenidoPrincipal from './components/ContenidoPrincipal/ContenidoPrincipal'
import Sponsors from './components/Sponsors/Sponsors'
import Carousel from './components/Carousel/Carousel'
import Footer from './components/Footer/footer'
import './components/Header/Header.css'
import './components/ItemListContainer/ItemListContainer.css'
import './components/ContenidoPrincipal/ContenidoPrincipal.css'
import './components/Sponsors/Sponsors.css'
import './components/Carousel/Carousel.css'
import './components/Footer/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <Header />
    <ContenidoPrincipal />
    <Sponsors />
    <Carousel />
    <Footer />
    </>
  )
}

export default App
