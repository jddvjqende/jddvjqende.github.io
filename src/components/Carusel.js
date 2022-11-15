const Carousel = () => {

    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="">
                    <img src="/robo-bicicletas.gif" className="" alt="imagenes de gps" width="" height="300" />
                </div>
                <div className="carousel-item" data-bs-interval="">
                    <img src="https://www.ngenespanol.com/wp-content/uploads/2018/10/GPS-mapa.jpg" className="" alt="imagenes de gepeeses" width="" height="300" />
                </div>
                <div className="carousel-item">
                    <img src="/imagen-robo.png"  alt="..." width="" height="300" />
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Carousel