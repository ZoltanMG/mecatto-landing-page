import './Contacto.css';
import horarioIcon from '../../assets/images/horario.png'
import emailIcon from '../../assets/images/email.png'
import storeIcon from '../../assets/images/store.png'
import igIcon from '../../assets/images/ig.png'
import { useScrollReveal } from '../../hooks/useScrollReveal';


function Contacto() {
  const parallax = useScrollReveal();
  const content = useScrollReveal();

  return (
    <>
      <div className="triangulo"></div>
      <div id="encuentranos">
        <div ref={parallax.ref} className={`encuentranos-text animation-up ${parallax.visible ? 'visible' : ''}`}>
          <h1>Encuéntranos</h1>
        </div>
        <div ref={content.ref} className={`content-encuentranos animation-up ${content.visible ? 'visible' : ''}`}>
          <div className='encuentranos-info'>
            <div>
              <img src={storeIcon} alt="sotre icon" />
              <p>Cl. 26 #6a-91, Bogotá</p>
            </div>
            <div>
              <img src={emailIcon} alt="email icon" />
              <p>mecatto.bogota@gmail.com</p>
            </div>
            <div>
              <img src={igIcon} alt="ig icon" />
              <p>@mecattobogota</p>
            </div>
            <div>
              <img src={horarioIcon} alt="ig icon" />
              <div>
                <p>L - S: 8:00am a 4:00pm</p>
              </div>
            </div>

          </div>
          <div className="mapa">
            <iframe
              title="Ubicación Mecatto Restaurante y Panadería"
              src="https://www.google.com/maps?q=Mecatto+Restaurante+y+Panaderia,+Bogotá&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacto;
