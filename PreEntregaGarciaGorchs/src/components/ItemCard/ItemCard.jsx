import { Link } from "react-router-dom"
import './ItemCard.css'
import '../ItemDetailContainer/ItemDetailContainer.css'

const ItemCard = ({ id, nombre, precio, descripcion, img }) => {

    return (
        
        <div class="col-3 m-5 card">
    <div class="card-img"><img className="size_card " src={img} alt={nombre} /></div>
    <div class="card-title titulo_card">{nombre}</div>
    <div class="card-subtitle"><p></p>Modelos Sugeridos: {descripcion}</div>
    <hr class="card-divider"/>
    <div class="card-footer">
        <div class="card-price">${precio}</div>
        <button class="card-btn">
        <Link className="btn_vermas" to={`/detail/${id}`}>Ver más</Link>
        </button>
    
    </div>
</div>

        // <div className="col-3 m-5 contenido_card">
        //     <p className='titulo_card'>{nombre}</p>
        //     <img className="size_card "src={img} alt={nombre}/>
        //     <p className="descripcion_card">Modelos Sugeridos: {descripcion}</p>
        //     <p className="precio_card">${precio}</p>
        //     <Link className="btn btn-primary" to={`/detail/${id}`}>Ver más</Link>
        // </div>

    )
}

export default ItemCard