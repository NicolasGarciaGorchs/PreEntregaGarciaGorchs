import { useContext, useState, useMemo } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, category, descripcion, img, stock }) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()

    const handleAgregar = () => {
        const item = {
            id,
            nombre,
            precio,
            category,
            descripcion,
            img,
            stock,
            cantidad
        }

        agregarAlCarrito(item)
    }


    const handleVolver = () => {
        navigate(-1)
    }



    return (

        <div>
            <Header />
            <div className="detalle_titulo">
                DETALLE DE PRODUCTO
            </div>
            <div className="detail_principal">
                <p className= "titulo_prod">{nombre}</p>
                <img className="size_img" src={img} alt={nombre} />
                <p>Modelos Sugeridos: {descripcion}</p>
                <h4>Precio: ${precio}</h4>
                <br />
                <small>Categoría: {category}</small>
                <br />
                {
                    isInCart(id)
                        ? <Link className="btn btn-success" to="/carrito">Terminar mi compra</Link>
                        : <ItemCount 
                            max={stock}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            handleAgregar={handleAgregar}
                        />
                }
                <hr />
                <button onClick={handleVolver} className="btn btn-primary">Volver</button>
            </div>
            <Footer />
        </div>
    )
}

export default ItemDetail