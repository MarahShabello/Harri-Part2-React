import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './home';
import DetailsPage from './countryDetails';

import BelgiumFlag from './images/belgium.svg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route path="/details"
          element={<DetailsPage
            name="Belgium"
            countryFlag={BelgiumFlag}
          />}
        />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
