import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { Citys } from './mocks/citys';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      reviews = {reviews}
      offers = {offers}
      citys = {Citys}
    />
  </React.StrictMode>,
);
