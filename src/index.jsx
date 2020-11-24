import React from 'react';
import { render } from 'react-dom';
import { Mapa } from './components/Mapa';
import './index.html';

render(
  <>
    <Mapa />
  </>,
  document.querySelector('#app'),
);
