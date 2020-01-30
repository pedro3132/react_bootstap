import React from 'react';
import './menu.css';
import Pbar from './Pbar';
import Fundo from '../Fundo/Fundo'
import Intro from '../Introdução/Video';

export default function Menu() {
  return (
 <>
<ul>
  <li><a className="active" href="#home">Inicio</a></li>
  <li><a href="#news">Noticias</a></li>
  <li><a href="#contact">Contatos</a></li>
  <Pbar/>
  </ul>
    <Fundo/>
    <Intro/>
    
 </>

  );
}
