import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import '../Cart/Cart.scss'

const Cart = () => {
    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            < div className="vacio_style">
                <div className="texto_vacio">
                TU CARRITO NO CONTIENE PRODUCTOS
                </div>
                <hr/>
                <Link className="btn btn-primary" to="/productos">Ir a la tienda</Link>
            </div>
        )
    }
   

    return (
        <div className="container cart_gral">
            <div className="titulo_cart">
            ¡BIENVENIDO A TU ESTADO DE COMPRA!
            </div>
            <div className="font_txt">
            <p >Acá podés ver los productos que seleccionaste</p>
            </div>
            {
                cart.map((prod) => (
                    <div className="contenedor_compra" key={prod.id}>
                        <h3>{prod.nombre}</h3>
                        <img className="size_img" src={prod.img} alt={prod.nombre}/>
                        <h6>Cantidad: {prod.cantidad}</h6>
                        <h4>Precio: ${prod.precio}</h4>
                        <button 
                            className="btn btn-danger"
                            onClick={() => eliminarDelCarrito(prod.id)}
                        >
                            <FaTrashAlt/>
                        </button>
                        <hr/>
                    </div>
                ))
            }
            <div className="style_cart">
                <div className="subtotal_style">
                <p>TOTAL: ${totalCompra()}</p>
                </div>
                <div className="style_btn"><Link className="btn btn-primary" to="/productos">Seguir comprando</Link>
                </div>
                <div className="style_btn"><button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carrito</button></div>
                <Link className="btn btn-success" to="/checkout">Terminar compra</Link>
            </div>
        </div>
    )
}

export default Cart