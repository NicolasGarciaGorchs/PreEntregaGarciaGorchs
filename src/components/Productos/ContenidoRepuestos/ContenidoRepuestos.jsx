import CartWidget from '../../CartWidget/CartWidget'
import './ContenidoRepuestos.scss'

const ContenidoRepuestos = () => {

    return (
        <main className="contenido_repuestos">
            <div className="titulo_repuestos">
                ¡BIENVENIDOS A NUESTRA TIENDA ONLINE!
            </div>
            <div>
        <CartWidget/>
        </div>
        </main>
        
    )
}

export default ContenidoRepuestos