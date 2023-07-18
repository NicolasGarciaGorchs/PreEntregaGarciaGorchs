const ItemCount = ({ max, cantidad, setCantidad, handleAgregar }) => {

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div className= "style_count">
        <div className="padding_count">
            <button 
                onClick={handleRestar} 
                className={cantidad === 1 ? "btn btn-danger" : "btn btn-primary"}
                disabled={cantidad === 1}
            >
                -
            </button>

            <span className="mx-3">{cantidad}</span>
            <button 
                onClick={handleSumar} 
                className={cantidad === max ? "btn btn-danger" : "btn btn-primary"}
                disabled={cantidad === max}

            >
                +
            </button>
        </div>
        <div className="style_agregar">
            <button onClick={handleAgregar} className="btn btn-success">Agregar al carrito</button>
        </div>
        </div>
    )
}

export default ItemCount