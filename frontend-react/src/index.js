import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';

import App from './App';

import 'aos/dist/aos.css'; // You can also use <link> for styles
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

AOS.init();
