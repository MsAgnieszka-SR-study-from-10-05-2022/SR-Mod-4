import React from 'react';
import RefButton from 'pages/5-ColorChangingButton/RefButton';

import colors from 'components/helpers/colors';

function AppRefColorChangingButton() {
    const buttonRef = React.createRef();

    const mouseOnButton = () => {
        buttonRef.current.style.background = `${colors.mainDarkColor}`;
        buttonRef.current.style.color = `${colors.mainBrightColor}`;
    };

    const mouseOutOfButton = () => {
        buttonRef.current.style.background = ``;
        buttonRef.current.style.color = ``;
    };

    return (
        <RefButton
            ref={buttonRef}
            mouseEnter={mouseOnButton}
            mouseLeave={mouseOutOfButton}
        >
            Jestem <span>zmieniającym kolor</span> przyciskiem 😅
        </RefButton>
    );
};

export default AppRefColorChangingButton;