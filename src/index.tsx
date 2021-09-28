import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('header'),
);

ReactDOM.render(
  <Main />,
  document.getElementById('main'),
);

ReactDOM.render(
  <Footer />,
  document.getElementById('footer'),
);
