import React from 'react';
import RollingGallery from './RollingGallery'; // Asegúrate de importar el componente de la galería
import './projects.css';
import miFoto from './../assets/4.PNG';
function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <p>Explora algunos de mis proyectos más destacados, donde combino creatividad, diseño moderno y soluciones funcionales. Cada uno refleja mi pasión por el desarrollo web y el enfoque en resultados efectivos. ¡Echa un vistazo y déjate inspirar!</p>
      <RollingGallery autoplay={true} pauseOnHover={true} />
      <div className="latest-project">
        <h3>Último Proyecto: Predicciones de la Velada V</h3>
        <p>Este es uno de mis proyectos más recientes y ambiciosos, Donde implemente Angular para hacer una pagina web de Predicciones de la velada V, donde los usuarios pueden votar al luchador favorito de cada grupo, y se actualiza de manera real time ¡Haz clic en el enlace para descubrir más detalles!</p>
        <img src={miFoto} alt="Último proyecto" />
<p></p>
        <a href="https://velada-a3916.web.app/" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
      </div>
    </section>
  );
}

export default Projects;
