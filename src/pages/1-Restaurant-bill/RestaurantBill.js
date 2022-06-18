import React, { useState } from 'react';
import styled from 'styled-components';

const RestaurantBillWrapper = styled.div`
    padding: 25px;
    height: auto;
    width: 60vw;
    margin: 10px 0px;
    border: 1px solid #8a9ab9;
`;

const RestaurantBillHeader = styled.h3`
    font-size: 20px;
`;

const RestaurantBillContent = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 25px;
    min-height: 130px;
`;

const RestaurantBillInput = styled.input`
    text-align: center;
    max-width: 130px;
    min-height: 35px;
`;

const RestaurantBillSelect = styled.select`
    text-align: center;
    max-width: 130px;
    min-height: 35px;
`;

const ButtonWrapper = styled.button`
    padding: 5px 10px;
    background-color: #AEDBCE;
    cursor: pointer;
`;

const ResultOfTheBill = styled.p`
    padding: 5px;
    background-color: #1d2536;
`;

// Komponent funkcyjny

function RestaurantBill({ vat }) {
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
        console.log(`Obecna cena netto to ${value}`);
    };

    const handleSelectValue = (e) => {
        const currentTipValue = e.target.value;
        setSelectTipValue(currentTipValue);
        console.log(`Wysokość napiwku wynosi ${currentTipValue*100}%`);
    };

    return(
            <RestaurantBillWrapper>
                <RestaurantBillHeader>Task 1 - Przeliczanie rachunku w restauracji</RestaurantBillHeader>
                <RestaurantBillContent>
                    <RestaurantBillInput type='number' onChange={handleInputPriceValue} placeholder={'Podaj kwotę netto'}></RestaurantBillInput>
                    <RestaurantBillSelect onChange={handleSelectValue}>
                        <option value="none" selected disabled >Napiwek</option>
                        <option value="0.05">5%</option>
                        <option value="0.10">10%</option>
                        <option value="0.15">15%</option>
                        <option value="0.20">20%</option>
                    </RestaurantBillSelect>
                    <ButtonWrapper type='button' onClick={handleCalculateResult}>Przelicz💲</ButtonWrapper>
                </RestaurantBillContent>
                <ResultOfTheBill>
                    Twój rachunek wraz z {vat}% VAT'em oraz napiwkiem wynosi <b>{totalPrice} zł</b>.
                </ResultOfTheBill>
            </RestaurantBillWrapper>
    );
}

export default RestaurantBill;