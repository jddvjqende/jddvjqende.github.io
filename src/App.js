
import './App.css';

function App() {
  return (
    <div className='app'>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="">
            <img src="/robo.bici.gif" class="d-block" alt="imagenes de gepeeses" />
          </div>
          <div class="carousel-item" data-bs-interval="">
            <img src="https://www.ngenespanol.com/wp-content/uploads/2018/10/GPS-mapa.jpg" class="d-block" alt="imagenes de gepeeses" />
          </div>
          <div class="carousel-item">
            <img src="/imagen-robo.png" class="d-block" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )



}

export default App;
