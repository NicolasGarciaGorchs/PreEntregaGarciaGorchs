import { Link } from "react-router-dom"
import '../ItemCard/ItemCard.css'
import '../ItemDetailContainer/ItemDetailContainer.css'

const ItemCard = ({id, nombre, precio, descripcion, img}) => {

    return (
        <div className="col-3 m-5 contenido_card">
            <p className='titulo_card'>{nombre}</p>
            <img src={img} alt={nombre}/>
            <p className="descripcion_card">{descripcion}</p>
            <p className="precio_card">Precio: ${precio}</p>
            <Link className="btn btn-primary" to={`/detail/${id}`}>Ver más</Link>
        </div>
    )
}

export default ItemCard