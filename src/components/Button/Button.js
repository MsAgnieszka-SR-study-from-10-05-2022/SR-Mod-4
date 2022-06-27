import React from 'react';

function Button({ className, onClick, buttonTitle }) {
    return (
        <button className={className} onClick={onClick}>
            {buttonTitle}
        </button>
    );
}

export default Button;