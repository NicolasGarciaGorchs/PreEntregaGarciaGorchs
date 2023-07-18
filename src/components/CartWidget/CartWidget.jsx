import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import '../CartWidget/CartWidget.scss'



const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <div>
            <p>
                Clickeá el carrito para ver tu estado de compra
            </p>
            <Link to="/carrito" className="link_cart">
                <AiOutlineShoppingCart className="cart_style" size='50px' />
                <span className="span_style">{totalCantidad()}</span>
            </Link>
        </div>
    )
}

export default CartWidget