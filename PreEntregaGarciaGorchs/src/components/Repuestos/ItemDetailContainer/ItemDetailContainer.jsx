import { useState, useEffect } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import '../ItemDetailContainer/ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()


    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId)))
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [itemId])

    return (
        <div className="container my-5">
           {
            loading 
                ? <div className="loading-bar">
                    Cargando
                    </div>
                : <ItemDetail {...item}/>
           }
        </div>
    )
}

export default ItemDetailContainer