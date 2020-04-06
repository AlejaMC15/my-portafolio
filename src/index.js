/*const element = document.createElement('h1');
element.innerText = 'Hello React';
const container = document.getElementById('root');
container.appendChild(element)*/

import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'


const container = document.getElementById('root')

//ReactDOM.render
ReactDOM.render(
  <div>
      <Nav />
      <Main 
        imgAle="../images/Aleja.jpg"
        title="Desarrolladora de Software Front-End, quien ayudará al éxito de tu negocio."
        textOne="Como desarrolladora de Software Front-End, creo sitios web y aplicaciones a tu
        medida para que tú y tu empresa tengan éxito."
        titleTwo="¿Quien soy?"
        paragraphOne=" Una mujer enamorada de la tecnología y con pasión por crear y aprender cosas nuevas. Formación
        con énfasis en habilidades blandas; experiencia laboral con más de cuatro años en el área de mercadeo y ventas;
        actualmente me encuentro adquiriendo destrezas y habilidades en el lenguaje de marcado HTML, de estilos CSS,
        Bootstrap y en el lenguaje de programación Java Script y ReactJS. "
        titleThree="Proyectos"
        titleFourth="Curriculum Vitae"
      />
      <Footer />
  </div>, container
);