import React, { useRef } from 'react';

import useInputHook from 'components/helpers/useInputHook';
import Button from 'components/Button';
import {
    GenderWrapper,
    RadioWrapper,
    RadioItem,
    StatuteWrapper,
    ErrorWrapper,
    SentInfoWrapper
} from 'pages/2-Forms-validation/styledComponents';
import colors from 'components/helpers/colors';

import 'App.scss';
import 'pages/2-Forms-validation/style.scss';

function FormsValidation(props) {
    const { titleOfForm, namePlaceholder, emailPlaceholder, shortBio } = props;

    const [name, handleNameChange, clearNameField] = useInputHook('');
    const [email, handlEmailChange, clearEmailField] = useInputHook('');
    const [textarea, handleTextareaChange, clearTextareaField] = useInputHook('');
    const [radio, handleRadioChange, clearRadioField] = useInputHook('');
    const [checkbox, handleCheckboxChange, clearCheckboxField] = useInputHook('');

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

    const checkingFilling = () => {
        let checker = 0;

        if (name === ''){
            nameErrorMsg.current.style.visibility = 'visible';
            nameErrorBorder.current.style.border = `2px solid ${colors.errorColor}`;
        } else {
            nameErrorMsg.current.style.visibility = 'hidden';
            nameErrorBorder.current.style.border = '';
            checker++;
        }

        if (email === ''){
            emailErrorMsg.current.style.visibility = 'visible';
            emailErrorBorder.current.style.border = `2px solid ${colors.errorColor}`;
        } else {
            emailErrorMsg.current.style.visibility = 'hidden';
            emailErrorBorder.current.style.border = '';
            checker++;
        }

        if (textarea === ''){
            textareaErrorMsg.current.style.visibility = 'visible';
            textareaErrorBorder.current.style.border = `2px solid ${colors.errorColor}`;
        } else {
            textareaErrorMsg.current.style.visibility = 'hidden';
            textareaErrorBorder.current.style.border = '';
            checker++;
        }

        if (radio === ''){
            radioErrorMsg.current.style.visibility = 'visible';
            radioErrorBorder.current.style.border = `2px solid ${colors.errorColor}`;
        } else {
            radioErrorMsg.current.style.visibility = 'hidden';
            radioErrorBorder.current.style.border = '';
            checker++;
        }

        if (checkbox !== true){
            checkboxErrorMsg.current.style.visibility = 'visible';
            checkboxErrorBorder.current.style.border = `2px solid ${colors.errorColor}`;
        } else {
            checkboxErrorMsg.current.style.visibility = 'hidden';
            checkboxErrorBorder.current.style.border = '';
            checker++;
        }
        if (checker === 5) {
            infoFormSent.current.style.visibility = 'visible';
            clearNameField();
            clearEmailField();
            clearTextareaField();
            clearRadioField();
            clearCheckboxField();
        }
    };

    const handleForm = (event) => {
        event.preventDefault();
        checkingFilling();
    };

    return(
        <form className='form__main-wrapper' onSubmit={handleForm}>
            <h3 className='form__main-title'>{titleOfForm}</h3>
            <div className='form__input-name' >
                <input
                    placeholder={namePlaceholder}
                    name='name'
                    value={name}
                    ref={nameErrorBorder}
                    onChange={handleNameChange} />
                <ErrorWrapper ref={nameErrorMsg}>Uzupełnij swoje imię</ErrorWrapper>
            </div>
            <div className='form__input-email'>
                <input
                    placeholder={emailPlaceholder}
                    name='email'
                    value={email}
                    ref={emailErrorBorder}
                    onChange={handlEmailChange} />
                <ErrorWrapper ref={emailErrorMsg}>Uzupełnij adres e-mail</ErrorWrapper>
            </div>
            <div className='form__textarea'>
                <textarea
                    placeholder={shortBio}
                    name='textarea'
                    value={textarea}
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
                                checked={radio === 'woman'}
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
                                checked={radio === 'man'}
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
                            checked={checkbox !== ''}
                            onChange={handleCheckboxChange}
                            style={{marginRight: '7px'}}
                            />
                        <label htmlFor='statute'>
                            Akceptuję warunki <a href='/' style={{ color: colors.mainBrightColor}}>regulaminu</a>
                        </label>
                </div>
                <ErrorWrapper ref={checkboxErrorMsg}>Zaakceptuj regulamin</ErrorWrapper>
            </StatuteWrapper>
            <Button className='form__button' buttonTitle='wyślij'></Button>
            <SentInfoWrapper ref={infoFormSent}>Formularz wysłany pomyślnie!</SentInfoWrapper>
        </form>
    );
}

export default FormsValidation;