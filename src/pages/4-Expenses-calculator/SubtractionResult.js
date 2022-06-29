import React from 'react';
import styled from 'styled-components';
import colors from 'components/helpers/colors';

const ResultWrapper = styled.div`
    p {
        color: ${ (props) => props.whatBalance ? colors.greenColor : colors.errorColor };
    }
`;

function SubtractionResult({ incomesSummary, expensesSummary }) {
    const summary = (incomesSummary - expensesSummary).toFixed(2);

    let onPlus;
    if ( summary >= 0 ) {
        onPlus = true;
    } else {
        onPlus = false;
    }

    return (
        <ResultWrapper className='form__array-summary' whatBalance={onPlus}>
            <h3 className='form__array-wrapper-summary-title'>Twoje saldo wynosi:</h3>
            <p className='form__array-wrapper-summary-result'>
                <span>{summary}</span> PLN
            </p>
        </ResultWrapper>
    );
}

export default SubtractionResult;