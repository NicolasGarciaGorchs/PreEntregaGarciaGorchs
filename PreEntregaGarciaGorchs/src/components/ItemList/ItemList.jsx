import ItemCard from "../ItemCard/ItemCard"



const ItemList = ({items = []}) => {

    return (
        <div>
            <div className='row'>
                {
                    items.map((prod) => <ItemCard key={prod.id} {...prod}/>)
                }
            </div>
        </div>
    )
}

export default ItemList