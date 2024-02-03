import './App.css';
import Header from './componentes/Header';
import Informador from './componentes/Informador';
import Informador2 from './componentes/Informador2';
import Informador3 from './componentes/Informador3';
import Footer from './componentes/Footer';
import Cards from "../src/componentes/Cards"


function App() {

  return (
    <div className="App">
      <Header />
      <Informador />
      <Informador2 />
    <div className='contenedor'>
      <h1 className='sub'>Entre los mas populares estan:</h1>
    <Cards Imagen="1"/>
    <Cards Imagen="2"/>
    <Cards Imagen="3"/>
    </div>

    <Informador3 />
    <Footer />
    </div>
  );
}

export default App;
