import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { OperationTable, SubtractionResult } from 'pages/4-Expenses-calculator';
import Button from 'components/Button';

import colors from 'components/helpers/colors';
import {
    PositionTypeWrapper,
    RadioWrapper,
    RadioItem,
    CategoryWrapper,
    ErrorWrapper
    } from 'pages/4-Expenses-calculator/style/styledComponents';
import 'pages/4-Expenses-calculator/style/style.scss';
import 'App.scss';

function ExpensesCalculator({ titleOfForm }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
        } = useForm({
            defaultValues: {
                nameOfOperation: '',
                valueOfOperation: '',
                positionType: '',
                selectCategory: ''
            }
        });

    const incomesDataArray = [];
    const expensesDataArray = [];

    const [incomesData, setIncomesData] = useState(incomesDataArray);
    const [expensesData, setExpensesData] = useState(expensesDataArray);

    const [incomesSummary, setIncomesSummary] = useState(0);
    const [expensesSummary, setExpensesSummary] = useState(0);

    const countTotalAmount = (arr) =>
        arr.reduce(
        (previousValue, currentValue) =>
            previousValue + Number(currentValue.valueOfOperation),
        0
    );

    useEffect(() => {
        setIncomesSummary(countTotalAmount(incomesData).toFixed(2));
        setExpensesSummary(countTotalAmount(expensesData).toFixed(2));
      }, [incomesData, expensesData]);

    const handleForm = (data) => {
        const newPosition = data;
        let randomIdNumber = Math.floor((Math.random() * 1000000) + 1);
        newPosition.id = `${newPosition.nameOfOperation}-${randomIdNumber}`;

        const updateData = (prev) => {
            return [...prev, newPosition];
        };

        if (newPosition.positionType === 'income') {
            setIncomesData(updateData);
        } else {
            setExpensesData(updateData);
        }

        reset({
            nameOfOperation: '',
            valueOfOperation: '',
            positionType: '',
            selectCategory: ''
        });
    };

    const deleteItem = (elementToDelete) => {
        const newTable = (currentTable) => {
            const newTableItems = currentTable.filter((element) => element.id !== elementToDelete.id);
            return newTableItems;
        };

    if (elementToDelete.positionType === 'income') {
            setIncomesData(newTable);
        } else if (elementToDelete.positionType === 'expense') {
            setExpensesData(newTable);
        }
    };

    return(
        <div
            className='form__main-wrapper'
            style={{maxWidth: '700px', width: '700px'}}
            >
            <h3 className='form__main-title'>{titleOfForm}</h3>
            <form onSubmit={handleSubmit(handleForm)}>
                <div className='form__input-operation-name'>
                    <input
                        type='text'
                        placeholder='Wpisz nazwę przychodu/wydatku'
                        style={{border: errors.nameOfOperation ? `2px solid ${colors.errorColor}` : ''}}
                        {...register('nameOfOperation', {
                            required: 'Nazwa jest wymagana',
                            minLength: {
                                value: 2,
                                message: 'Nazwa musi składać się z min. 2 znaków'
                            }
                        })}
                    />
                    <ErrorWrapper>{errors.nameOfOperation?.message}</ErrorWrapper>
                </div>
                <div className='form__input-value'>
                    <input
                        type='number'
                        step="0.01"
                        placeholder='Wpisz kwotę'
                        style={{border: errors.valueOfOperation ? `2px solid ${colors.errorColor}` : ''}}
                        {...register('valueOfOperation', {
                            required: 'Kwota jest wymagana',
                            min: {
                                value: 0.01,
                                message: 'Wartość minimalna to 0.01 PLN'
                            }
                        })}
                    />
                    <ErrorWrapper>{errors.valueOfOperation?.message}</ErrorWrapper>
                </div>
                <PositionTypeWrapper>
                    <RadioWrapper style={{border: errors.positionType ? `2px solid ${colors.errorColor}` : ''}}>
                        <RadioItem>
                            <input
                                type='radio'
                                id='income'
                                value='income'
                                {...register('positionType', { required: 'Wybierz rodzaj pozycji' })}
                            />
                            <label htmlFor='income'>Przychód</label>
                        </RadioItem>
                        <RadioItem>
                            <input
                                type='radio'
                                id='expense'
                                value='expense'
                                {...register('positionType', { required: 'Wybierz rodzaj pozycji' })}
                            />
                            <label htmlFor='expense'>Wydatek</label>
                        </RadioItem>
                    </RadioWrapper>
                    <ErrorWrapper>{errors.positionType?.message}</ErrorWrapper>
                </PositionTypeWrapper>
                <CategoryWrapper>
                    <select
                        className='form__select-category'
                        style={{border: errors.selectCategory ? `2px solid ${colors.errorColor}` : ''}}
                        {...register('selectCategory', { required: 'Wybierz kategorię' })}
                        >
                            <option value='' disabled>Wybierz kategorię...</option>
                            <option value='private'>Prywatne</option>
                            <option value='business'>Służbowe</option>
                    </select>
                    <ErrorWrapper>{errors.selectCategory?.message}</ErrorWrapper>
                </CategoryWrapper>
                <Button className='form__button' buttonTitle='Dodaj pozycję'></Button>
            </form>
            <div className='form__array-wrapper'>
                <div>
                    <h3 className='form__array-wrapper-income-title'>Przychody:</h3>
                    <OperationTable className='form__array-wrapper-income' tableOfData={incomesData} deleteItem={deleteItem} />
                </div>
                <div>
                    <h3 className='form__array-wrapper-expense-title'>Wydatki:</h3>
                    <OperationTable className='form__array-wrapper-expense' tableOfData={expensesData} deleteItem={deleteItem} />
                </div>
            </div>
            <SubtractionResult incomesSummary={incomesSummary} expensesSummary={expensesSummary} />
        </div>
    );
};

export default ExpensesCalculator;