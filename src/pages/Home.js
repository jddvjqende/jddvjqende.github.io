
import Carousel from '../components/Carusel';
import Buton from '../components/boton';
import Texto from '../components/texto';
import Card from './cart';
import Texto_2 from '../components/texto-2';
function Home() {
  return (
    <div className='app' >

      <div className="container" >
        <div className="row">
          <div className="col-4 text-left">
            <Texto />
          </div>
          <div className="col-8">
            <Carousel />
            <Card ></Card>
          </div>
        </div>

        <div className="row">
          <div className="col-4 text-left">
            <Texto_2></Texto_2>
          </div>
          <div className="col-8">
            <img src="/imagen-robo.png" alt='imagen de evitar el robo' id = "imagen"></img>
            <Buton />
          </div>
        </div>
      </div>
    </div>


  )



}


export default Home