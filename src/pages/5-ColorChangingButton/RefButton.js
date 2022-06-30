import React from 'react';
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

const RefButton = React.forwardRef(( { mouseEnter, mouseLeave, children }, buttonRef ) => {
    return(
        <Button
            ref={buttonRef}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            >
                {children}
        </Button>
    );
});

export default RefButton;