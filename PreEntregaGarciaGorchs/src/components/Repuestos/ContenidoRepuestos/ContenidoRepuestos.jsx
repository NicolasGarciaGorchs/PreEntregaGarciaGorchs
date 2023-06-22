import '../ContenidoRepuestos/ContenidoRepuestos.css'
import Buscador from '../../Buscador/Buscador'


const ContenidoRepuestos = () => {
    return (
        <main className="contenido_repuestos">
            <div className="titulo_repuestos">
                ¡BIENVENIDOS A NUESTRA TIENDA ONLINE!
            </div>
            <div>    
                <Buscador />
            </div>
        </main>
    )
}

export default ContenidoRepuestos