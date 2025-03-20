import React, { useRef } from 'react';
import './header.css';
import Squares from './Squares';
import miFoto from './../assets/natan.webp'; // Importa la imagen
import SplitText from './SplitText'; // Importa el componente SplitText

function Header() {
    const headerRef = useRef(null); // Crea una referencia para el contenedor del Header
  
    return (
      <header id="home" className="header" ref={headerRef}>
        {/* Agrega el componente Squares como fondo del Header */}
        <Squares
          direction="diagonal"
          speed={1}
          borderColor="#999"
          squareSize={40}
          hoverFillColor="#222"
          className="header-background"
          containerRef={headerRef} // Pasa la referencia al componente Squares
        />
        <div className="header-content">
          {/* Contenedor de la imagen circular */}
          <div className="profile-image-container">
            <img
              src={miFoto} // Usa la imagen importada
              alt="Mi Foto"
              className="profile-image"
            />
          </div>
  
          {/* Título arriba */}
          <SplitText
            text="Natan Cejas"
            className="header-title"
            delay={50} // Retraso entre animaciones de letras
            animationFrom={{ opacity: 0, transform: 'translate3d(0,40px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            textAlign="center"
          />
  <p></p>
          {/* Descripción abajo */}
          <SplitText
            text="Desarrollador Web"
            className="header-subtitle"
            delay={50} // Retraso entre animaciones de letras
            animationFrom={{ opacity: 0, transform: 'translate3d(0,40px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            textAlign="center"
          />
        </div>
      </header>
    );
  }
  
  export default Header;