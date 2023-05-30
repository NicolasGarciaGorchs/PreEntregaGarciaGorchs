import Clicker from '../Clicker/Clicker.jsx';
import '../Clicker/Clicker.css';

const ItemListContainer = ( {mensaje} ) => {
    return (
        <div className="itemlistcontainer">
            <p className="mensaje">{mensaje}</p>
        <Clicker/>
        </div>
    )
}

export default ItemListContainer