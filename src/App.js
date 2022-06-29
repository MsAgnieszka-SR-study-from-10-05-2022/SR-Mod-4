import React from 'react';

// import RestaurantBill from 'pages/1-Restaurant-bill';
// import FormsValidation from 'pages/2-Forms-validation';
// import FormWithUseForm from 'pages/3-Form-using-hook-useForm';
import ExpensesCalculator from 'pages/4-Expenses-calculator';

import './App.scss';
import 'pages/3-Form-using-hook-useForm/style.scss';

function App() {
  return (
    <div className="App">
      {/* <RestaurantBill vat='8' /> */}
      {/* <FormsValidation
        titleOfForm='Task 2 - Formularz'
        namePlaceholder='Podaj swoje imię'
        emailPlaceholder='Podaj swój adres e-mail'
        shortBio='Wpisz treść wiadomości...'
      /> */}
      {/* <FormWithUseForm
        titleOfForm='Task 3 - Formularz z użyciem biblioteki React Hook Form'
        namePlaceholder='Podaj swoje imię'
        emailPlaceholder='Podaj swój adres e-mail'
        shortBio='Wpisz treść wiadomości...'
      /> */}
      <ExpensesCalculator
        titleOfForm='Kalkulator wydatków' />
    </div>
  );
}

export default App;
