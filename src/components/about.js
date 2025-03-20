import React from 'react';
import './about.css';
import { FaHtml5, FaCss3Alt, FaAngular, FaReact,FaShoppingCart  } from 'react-icons/fa';
function About() {
  return (
    <section id="about" className="about">
      <h2>Sobre Mí</h2>
      <p>
        Soy Natán Cejas, desarrollador web apasionado por crear experiencias digitales impactantes. 
        Me especializo en diseño web, desarrollo frontend y optimización de conversiones en proyectos de eCommerce. 
        Mi enfoque está en construir soluciones eficientes y atractivas que impulsen el crecimiento de negocios online.
      </p>
      <div className="cards">
      <div className="card"><FaShoppingCart size={40} color="#E34F26" /> ECOMM</div>
          <div className="card"><FaHtml5 size={40} color="#E34F26" /> HTML</div>
          <div className="card"><FaCss3Alt size={40} color="#1572B6" /> CSS</div>
          <div className="card"><FaAngular size={40} color="#DD0031" /> Angular</div>
          <div className="card"><FaReact size={40} color="#61DAFB" /> React</div>
        </div>
    </section>
  );
}

export default About;
