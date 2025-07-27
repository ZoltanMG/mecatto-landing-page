import { useEffect, useState } from 'react';
import './Banner.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function Banner() {
  const [scrolled, setScrolled] = useState(false);
  const { ref, visible } = useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div>
          <a href="#banner" className={`logo ${scrolled ? 'logo-scrolled' : ''}`}>Mecatto</a>
        </div>
        <div className='links'>
          <a href="#restaurante" className={scrolled ? 'color-black' : 'color-white'}>Restaurante</a>
          <a href="#panaderia" className={scrolled ? 'color-black' : 'color-white'}>Panadería</a>
          <a href="#encuentranos" className={scrolled ? 'color-black' : 'color-white'}>Encuéntranos</a>
          {/* <a href="#nosotros" className={scrolled ? 'color-black' : 'color-white'}>Nosotros</a> */}
        </div>
      </nav>
      <div id='banner'>
        <div className="hero-overlay">
          <p ref={ref} className={`mensaje-banner animation-up ${visible ? 'visible' : ''}`}>
            En el corazón de Bogotá, se encuentra Mecatto Cocina de Autor, un restaurante y panadería, con ingredientes frescos y de alta calidad. 
          </p>
        </div>
      </div>
    </header>
  );
}

export default Banner;
