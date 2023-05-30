const Carousel = () => {
    return (
        <div className="alinear"> 
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src='src/assets/Carousel/carousel1.png' className="d-block w-80" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src='src/assets/Carousel/carousel2.png' className="d-block w-80" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src='src/assets/Carousel/carousel3.png' className="d-block w-80" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          </div>
        </div>
    )
}

export default Carousel