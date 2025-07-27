import { useScrollReveal } from '../../hooks/useScrollReveal';
import red from '../../assets/images/red.png'
import cake from '../../assets/images/chesse-cake.png'
import merengon from '../../assets/images/Merengon.png'
import './Panaderia.css'

function Panaderia() {
  const parallax = useScrollReveal();
  const card1 = useScrollReveal();
  const card2 = useScrollReveal();
  const card3 = useScrollReveal();

  return (
    <div id='panaderia'>
      <div className="parallax-container-panaderia">
        <div ref={parallax.ref} className={`parallax-text animation-up ${parallax.visible ? 'visible' : ''}`}>
          <h1>Panadería</h1>
        </div>
      </div>
      <section className="features-container">
        <div
          ref={card1.ref} className={`feature-card animation-up ${card1.visible ? 'visible' : ''}`}
          style={{ backgroundImage: `url(${red})` , backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}
        >
          <div className="feature-overlay">
            <h3>PAPARDELLE Y CAMARONES</h3>
            {/* <p>Pasta elaborada artesanalmente en salsa pomodoro y camarones, aromatizada con albahaca.</p> */}
          </div>
        </div>

        <div
          ref={card2.ref} className={`feature-card animation-up ${card2.visible ? 'visible' : ''}`}
          style={{ backgroundImage: `url(${merengon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}
        >
          <div className="feature-overlay">
            <h3>CERDO PRENSADO</h3>
            {/* <p>Corte de cerdo cocido durante 6 horas, desmenuzado y prensado, luego dorado en sarten con su propio caldo.</p> */}
          </div>
        </div>

        <div
          ref={card3.ref} className={`feature-card animation-up ${card3.visible ? 'visible' : ''}`}
          style={{ backgroundImage: `url(${cake})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}
        >
          <div className="feature-overlay">
            <h3>SALMON Y SALSA DE ESFERAS DE TAPIOCA</h3>
            {/* <p>Corte de salmón cocido a fuego lento y sellado a la perfección en sartén, servido junto a tiernos cogollos glaseados y sellados</p> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Panaderia;
