import React from 'react';
import './App.css';
import Navbar from './components/navbar'; // Ruta corregida
import Header from './components/header'; // Ruta corregida
import About from './components/about';   // Ruta corregida
import Projects from './components/projects'; // Ruta corregida
import Contact from './components/contact'; // Ruta corregida

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;