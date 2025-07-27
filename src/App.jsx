import './App.css';
import Banner from './components/banner/Banner';
import Contacto from './components/contacto/Contacto';
import Footer from './components/footer/Footer';
import Panaderia from './components/panadería/Panaderia';
import Restaurant from './components/restaurant/Restaurant';
import reservaIcon from './assets/images/reserva-icon.png'

function App() {
  return (
    <>
      <a href="https://wa.me/573185560463" className="reserva-icon" target="_blank" rel="noreferrer">
        <img src={reservaIcon} alt="WhatsApp" />
      </a>
      <Banner />
      <Restaurant />
      <Panaderia />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
