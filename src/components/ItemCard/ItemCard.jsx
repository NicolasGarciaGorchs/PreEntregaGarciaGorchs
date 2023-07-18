import { Link } from "react-router-dom";
import "./ItemCard.scss";
import "../ItemDetailContainer/ItemDetailContainer.scss";

const ItemCard = ({ id, nombre, precio, descripcion, img }) => {
  return (
    <div class="col-3 m-5 card">
      <div class="card-img">
        <img class="size_card" src={img} alt={nombre} />
      </div>
      <div class="card-title titulo_card">{nombre}</div>
      <div class="card-subtitle">
        <p>Modelos Sugeridos: {descripcion}</p>
      </div>
      <hr class="card-divider" />
      <div class="card-footer">
        <div class="card-price">${precio}</div>
          <Link class="btn_vermas" to={`/detail/${id}`}>
          <button class="card-btn">Ver más</button>
          </Link>
      </div>
    </div>
  );
};

export default ItemCard;