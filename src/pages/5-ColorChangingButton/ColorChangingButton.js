import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import colors from 'components/helpers/colors';
import './style.scss';

const Button = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    color: ${colors.mainDarkColor};
    background: ${colors.greenColor};
    cursor: pointer;
    border: 2px solid ${colors.borderColor};
    border-radius: 5px;

    span {
        font-weight: bold;
        text-decoration: underline;
    }
`;

function ColorChangingButton() {

    const buttonRef = useRef();

    const mouseOnButton = () => {
        buttonRef.current.style.background = `${colors.mainDarkColor}`;
        buttonRef.current.style.color = `${colors.mainBrightColor}`;
    };

    const mouseOutOfButton = () => {
        buttonRef.current.style.background = ``;
        buttonRef.current.style.color = ``;
    };

    return (
        <Button
            ref={buttonRef}
            onMouseEnter={mouseOnButton}
            onMouseLeave={mouseOutOfButton}
        >
            Jestem <span>zmieniającym kolor</span> przyciskiem 😅
        </Button>
    );
}

export default ColorChangingButton;