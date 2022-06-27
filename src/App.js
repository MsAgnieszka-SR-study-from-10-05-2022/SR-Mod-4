import React from 'react';

import RestaurantBill from 'pages/1-Restaurant-bill';
import FormsValidation from 'pages/2-Forms-validation';

import './App.scss';

function App() {
  return (
    <div className="App">
      <RestaurantBill vat='8' />
      <FormsValidation
        titleOfForm='Task 2 - Formularz'
        namePlaceholder='Podaj swoje imię'
        emailPlaceholder='Podaj swój adres e-mail'
        shortBio='Wpisz treść wiadomości...'
      />
    </div>
  );
}

export default App;
