import React from 'react';
import './contact.css'; // Crearemos este archivo después

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <p>¿Tienes alguna idea en mente o un proyecto en el que pueda ayudarte? ¡Estoy aquí para escucharte! No dudes en ponerte en contacto conmigo.</p>
      <p>Puedes enviarme un correo directamente a: <a href="mailto:natancejasgar@gmail.com">natancejasgar@gmail.com</a></p>
      <p>O, si lo prefieres, también puedes encontrarme en mis redes sociales para estar al tanto de mis últimos proyectos y novedades.</p>
    </section>
  );
}

export default Contact;