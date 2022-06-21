import React, { useState } from 'react';
import styled from 'styled-components';
import colors from 'components/helpers/colors';
import 'App.scss';

const RestaurantBillContent = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 160px;
    justify-content: space-between;
    margin: 5px;
    min-height: 130px;
`;

const ResultOfTheBill = styled.p`
    padding: 5px 10px;
    color: ${colors.mainBrightColor};
    background-color: ${colors.borderColor};
    border-radius: 5px;
`;

// Komponent funkcyjny

function RestaurantBill({ vat, buttonTitle }) {
    const [inputPriceValue, setInputPriceValue] = useState('');
    const [tipValue, setSelectTipValue] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleCalculateResult = (event) => {
        event.preventDefault();

        if (inputPriceValue === '') {
            alert('Uzupełnij kwotę.');
        } else {
            const price = parseInt(inputPriceValue);
            const priceWithVat = price + price*(vat/100);
            const priceWithVatAndTip = priceWithVat + priceWithVat*tipValue;
            setTotalPrice(priceWithVatAndTip.toFixed(2));
        }
    };

    const handleInputPriceValue = (event) => {
        const value = event.target.value;
        setInputPriceValue(value);
    };

    const handleSelectValue = (event) => {
        const currentTipValue = event.target.value;
        setSelectTipValue(currentTipValue);
    };

    return(
            <form className='form__main-wrapper'>
                <h3 className='form__main-title'>Task 1 - Przeliczanie rachunku w restauracji - komponent funkcyjny</h3>
                <RestaurantBillContent>
                    <input className='form__input-price'
                    type='number'
                    onChange={handleInputPriceValue}
                    placeholder={'Podaj kwotę netto'}>
                    </input>
                    <select
                    className='form__select-tip'
                    onChange={handleSelectValue}>
                        <option value="0" selected disabled >Napiwek</option>
                        <option value="0.05">5%</option>
                        <option value="0.10">10%</option>
                        <option value="0.15">15%</option>
                        <option value="0.20">20%</option>
                    </select>
                    <span style={{marginTop: '10px'}}>⬇️</span>
                    <button className='form__button' type='button' onClick={handleCalculateResult}>{buttonTitle}</button>
                </RestaurantBillContent>
                <ResultOfTheBill>
                    Twój rachunek wraz z {vat}% VAT'em oraz napiwkiem wynosi <b>{totalPrice} zł</b>.
                </ResultOfTheBill>
            </form>
    );
}

//  =========================================

// Komponent klasowy

// class RestaurantBill extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             vat: props.vat,
//             buttonTitle: props.buttonTitle,
//             inputPriceValue: 0,
//             tipValue: 0,
//             totalPrice: 0,
//         };
//     }

//     handleCalculateResult(event) {
//         event.preventDefault();

//         const price = this.state.inputPriceValue;
//         const vatOfPrice = ((this.state.vat)/100) * price;
//         const priceWithVat = price + vatOfPrice;
//         const tipOfPriceWithVat = Number((this.state.tipValue * priceWithVat).toFixed(2));
//         const priceWithVatAndTip = Number(priceWithVat + tipOfPriceWithVat).toFixed(2);

//         if (this.state.inputPriceValue === '' || this.state.inputPriceValue === 0) {
//             alert('Uzupełnij kwotę o liczbę większą od 0.');
//         } else {
//             this.setState({ totalPrice: priceWithVatAndTip });
//         }
//     }

//     handleInputPriceValue(event)  {
//         const value = event.target.value;
//         this.setState({ inputPriceValue: Number(value) });
//     }

//     handleSelectValue(event) {
//         const currentTipValue = event.target.value;
//         this.setState({ tipValue: Number(currentTipValue) });
//     }

//     render() {
//         return(
//             <form className='form__main-wrapper'>
//                 <h3 className='form__main-title'>Task 1 - Przeliczanie rachunku w restauracji - komponent klasowy</h3>
//                 <RestaurantBillContent>
//                     <input className='form__input-price' type='number' onChange={(event) => this.handleInputPriceValue(event)} placeholder={'Podaj kwotę netto'}></input>
//                     <select className='form__select-tip' onChange={(event) => this.handleSelectValue(event)}>
//                         <option defaultValue="0" selected disabled >Napiwek</option>
//                         <option value="0.05">5%</option>
//                         <option value="0.10">10%</option>
//                         <option value="0.15">15%</option>
//                         <option value="0.20">20%</option>
//                     </select>
//                     <span style={{marginTop: '10px'}}>⬇️</span>
//                     <button className='form__button' type='button' onClick={(event) => this.handleCalculateResult(event)}>{this.state.buttonTitle}</button>
//                 </RestaurantBillContent>
//                 <ResultOfTheBill>
//                     Twój rachunek wraz z {this.state.vat}% VAT'em oraz napiwkiem wynosi <b>{this.state.totalPrice} zł</b>.
//                 </ResultOfTheBill>
//             </form>
//         );
//     }
// }

export default RestaurantBill;