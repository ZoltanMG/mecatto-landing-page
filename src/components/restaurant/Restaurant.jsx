import './Restaurant.css'
import { useScrollReveal } from '../../hooks/useScrollReveal';
import fotoCard from '../../assets/images/Medallon-cerdo.png'
import papardele from '../../assets/images/papardalle-y-camarones.png'
import salmon from '../../assets/images/Salmon.png'
import flechaAbajo from '../../assets/images/flecha-abajo.png'


function Restaurant() {
  const parallax = useScrollReveal();
  const card1 = useScrollReveal();
  const card2 = useScrollReveal();
  const card3 = useScrollReveal();
  const verMas = useScrollReveal();

  return (
    <div id='restaurante'>
      <div className="parallax-container">
        <div ref={parallax.ref} className={`parallax-text animation-up ${parallax.visible ? 'visible' : ''}`}>
          <h1>Restaurante</h1>
        </div>
      </div>
      <section className="features-container">
        <div
          ref={card1.ref} className={`feature-card animation-up ${card1.visible ? 'visible' : ''}`}
          style={{ backgroundImage: `url(${papardele})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}
        >
          <div className="feature-overlay">
            <h3>PAPARDELLE Y CAMARONES</h3>
            <p>Pasta elaborada artesanalmente en salsa pomodoro y camarones, aromatizada con albahaca.</p>
          </div>
        </div>

        <div
          ref={card2.ref} className={`feature-card animation-up ${card2.visible ? 'visible' : ''}`}
          style={{ backgroundImage: `url(${fotoCard})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}
        >
          <div className="feature-overlay">
            <h3>CERDO PRENSADO</h3>
            <p>Corte de cerdo cocido durante 6 horas, desmenuzado y prensado, luego dorado en sarten con su propio caldo.</p>
          </div>
        </div>

        <div
          ref={card3.ref} className={`feature-card animation-up ${card3.visible ? 'visible' : ''}`}
          style={{ backgroundImage: `url(${salmon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}
        >
          <div className="feature-overlay">
            <h3>SALMON Y SALSA DE ESFERAS DE TAPIOCA</h3>
            <p>Corte de salmón cocido a fuego lento y sellado a la perfección en sartén, servido junto a tiernos cogollos glaseados y sellados</p>
          </div>
        </div>
      </section>
      <div className='content-ver-mas'>
        <div ref={verMas.ref} className={`ver-mas animation-up ${verMas.visible ? 'visible' : ''}`}>
          <p>Ver más</p>
          <img src={flechaAbajo} alt="Flecha abajo" />
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
