import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import colors from 'components/helpers/colors';
import 'App.scss';
import 'pages/2-Forms-validation/style.scss';

const GenderWrapper = styled.div`
    text-align: center;
    margin-top: 10px;
    color: ${colors.mainBrightColor};
    border-radius: 5px;
`;

const RadioWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 5px;
`;

const RadioItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    width: 100px;
`;

const StatuteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ErrorWrapper = styled.p`
    font-size: 12px;
    color: transparent;
`;

const InfoWrapper = styled(ErrorWrapper)`
    font-size: 14px;
    font-weight: bold;
`;

function useInput(initialValue = '') {
    const [input, setInput] = useState(initialValue);

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setInput(value);
    };

    const clearFields = () => {
        setInput('');
    };

    return [input, handleChange, clearFields];
}

function FormsValidation(props) {
    const { titleOfForm, namePlaceholder, emailPlaceholder, shortBio, buttonTitle } = props;

    const [name, handleNameChange, clearNameField] = useInput('');
    const [email, handlEmailChange, clearEmailField] = useInput('');
    const [textarea, handleTextareaChange, clearTextareaField] = useInput('');
    const [radio, handleRadioChange, clearRadioField] = useInput('');
    const [checkbox, handleCheckboxChange, clearCheckboxField] = useInput('');

    const nameErrorBorder = useRef();
    const nameErrorMsg = useRef();
    const emailErrorBorder = useRef();
    const emailErrorMsg = useRef();
    const textareaErrorBorder = useRef();
    const textareaErrorMsg = useRef();
    const radioErrorBorder = useRef();
    const radioErrorMsg = useRef();
    const checkboxErrorBorder = useRef();
    const checkboxErrorMsg = useRef();
    const infoFormSent = useRef();

    const handleForm = (event) => {
        event.preventDefault();

        let checker = 0;

        if (name === ''){
            nameErrorMsg.current.style.color =  colors.errorColor;
            nameErrorBorder.current.style.border = `2px solid ${colors.errorColor}`;
        } else {
            nameErrorMsg.current.style.color = 'transparent';
            nameErrorBorder.current.style.border = '';
            checker++;
        }

        if (email === ''){
            emailErrorMsg.current.style.color =  colors.errorColor;
            emailErrorBorder.current.style.border = `2px solid ${colors.errorColor}`;
        } else {
            emailErrorMsg.current.style.color = 'transparent';
            emailErrorBorder.current.style.border = '';
            checker++;
        }

        if (textarea === ''){
            textareaErrorMsg.current.style.color =  colors.errorColor;
            textareaErrorBorder.current.style.border = `2px solid ${colors.errorColor}`;
        } else {
            textareaErrorMsg.current.style.color = 'transparent';
            textareaErrorBorder.current.style.border = '';
            checker++;
        }

        if (radio === ''){
            radioErrorMsg.current.style.color =  colors.errorColor;
            radioErrorBorder.current.style.border = `2px solid ${colors.errorColor}`;
        } else {
            radioErrorMsg.current.style.color = 'transparent';
            radioErrorBorder.current.style.border = '';
            checker++;
        }

        if (checkbox !== true){
            checkboxErrorMsg.current.style.color =  colors.errorColor;
            checkboxErrorBorder.current.style.border = `2px solid ${colors.errorColor}`;
        } else {
            checkboxErrorMsg.current.style.color = 'transparent';
            checkboxErrorBorder.current.style.border = '';
            checker++;
        }
        if (checker === 5) {
            infoFormSent.current.style.color = colors.greenColor;
            clearNameField();
            clearEmailField();
            clearTextareaField();
            clearRadioField();
            clearCheckboxField();
        }
    };

    return(
        <form className='form__main-wrapper' onSubmit={handleForm}>
            <h3 className='form__main-title'>{titleOfForm}</h3>
            <div className='form__input-name' >
                <input
                    placeholder={namePlaceholder}
                    name='name'
                    ref={nameErrorBorder}
                    onChange={handleNameChange} />
                <ErrorWrapper ref={nameErrorMsg}>Uzupełnij swoje imię</ErrorWrapper>
            </div>
            <div className='form__input-email'>
                <input
                    placeholder={emailPlaceholder}
                    name='email'
                    ref={emailErrorBorder}
                    onChange={handlEmailChange} />
                <ErrorWrapper ref={emailErrorMsg}>Uzupełnij adres e-mail</ErrorWrapper>
            </div>
            <div className='form__textarea'>
                <textarea
                    placeholder={shortBio}
                    name='textarea'
                    ref={textareaErrorBorder}
                    onChange={handleTextareaChange} />
                <ErrorWrapper ref={textareaErrorMsg}>Uzupełnij treść wiadomości</ErrorWrapper>
            </div>
            <GenderWrapper>
                <p>Płeć:</p>
                <div className='form__gender'>
                    <RadioWrapper
                        className='form__gender-items'
                        ref={radioErrorBorder}>
                        <RadioItem>
                            <input
                                type='radio'
                                name='gender'
                                value='woman'
                                id='woman'
                                onChange={handleRadioChange}
                                />
                            <label htmlFor='woman'>
                                Kobieta
                            </label>
                        </RadioItem>
                        <RadioItem>
                            <input
                                type='radio'
                                name='gender'
                                value='man'
                                id='man'
                                onChange={handleRadioChange}
                                />
                            <label htmlFor='man'>
                                Mężczyzna
                            </label>
                        </RadioItem>
                    </RadioWrapper>
                    <ErrorWrapper ref={radioErrorMsg}>Zaznacz swoją płeć</ErrorWrapper>
                </div>
            </GenderWrapper>
            <StatuteWrapper className='form__checkbox'>
                <div
                    className='form__checkbox-item'
                    ref={checkboxErrorBorder}>
                        <input
                            type='checkbox'
                            id='statute'
                            name='checkbox'
                            onClick={handleCheckboxChange}
                            style={{marginRight: '7px'}}
                            />
                        <label htmlFor='statute'>
                            Akceptuję warunki <a href='/' style={{ color: colors.mainBrightColor}}>regulaminu</a>
                        </label>
                </div>
                <ErrorWrapper ref={checkboxErrorMsg}>Zaakceptuj regulamin</ErrorWrapper>
            </StatuteWrapper>
            <button className='form__button'>{buttonTitle}</button>
            <InfoWrapper ref={infoFormSent}>Formularz wysłany pomyślnie!</InfoWrapper>
        </form>
    );
}

export default FormsValidation;