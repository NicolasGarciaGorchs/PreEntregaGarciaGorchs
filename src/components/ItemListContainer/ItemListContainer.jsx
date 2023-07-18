import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where, limit } from 'firebase/firestore'
import { db } from '../../firebase/config'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        // 1.- armar una referencia (sync)
        const productosRef = collection(db, "productos")
        const q = categoryId 
                    ? query(productosRef, where("category", "==", categoryId))
                    : productosRef
        // 2.- peticion de esa referencia (async)
        getDocs(q)
            .then((resp) => {
                const items = resp.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setProductos(items)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    }, [categoryId])

                        
    return (
        <div className="container">
            {
                loading
                    ? <div className="centrar_style"><div data-glitch="Loading..." className="glitch">Cargando...</div></div>
                    : <ItemList items={productos}/>
            }
        </div>
    )
}

export default ItemListContainer


//listados en items={listados}