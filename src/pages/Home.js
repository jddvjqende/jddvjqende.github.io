
import Carousel from '../components/Carusel';
import Buton from '../components/boton';
import Texto from '../components/texto';
import Card from './cart';
function Home() {
  return (
    <div className='app' >

      <div className="container" >
        <div className="row">
          <div className="col-4 text-left">
            <Texto />
          </div>
          <div className="col-8">
            <Carousel /> <br>
            </br>
            <Card ></Card>
          </div>
        </div>
        <div className='row '>

            <Buton /> <br>
            </br>
          <img src="/imagen-robo.png"alt='imagen de evitar el robo' className='w-50 m-auto'></img>
          <h2>sientete seguro a la hora de andar en tu bici sin miedo a que te la roben arriesgate a esta nueva tecnologia del momento </h2>
          
          
        </div>
      </div>
    </div>

  )



}


export default Home