import React from 'react';
import { useForm } from 'react-hook-form';

import {
    GenderWrapper,
    RadioWrapper,
    RadioItem,
    StatuteWrapper,
    ErrorWrapper,
    SentInfoWrapper
} from 'pages/3-Form-using-hook-useForm/styledComponents';
import Button from 'components/Button';
import colors from 'components/helpers/colors';

import 'App.scss';
import 'pages/3-Form-using-hook-useForm/style.scss';

function FormWithUseForm(props) {
    const {
        titleOfForm,
        namePlaceholder,
        emailPlaceholder,
        shortBio
    } = props;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm();

    const onSubmit = () => {
        reset({ name: "", email: "", textarea: "", gender: "", checkbox: "" });
    };

    return(
        <form className='form__main-wrapper' onSubmit={handleSubmit(onSubmit)}>
            <h3 className='form__main-title'>{titleOfForm}</h3>
            <div className='form__input-name' >
                <input
                    placeholder={namePlaceholder}
                    {...register('name', {
                        required: 'To pole jest wymagane',
                        minLength: {
                            value: 2,
                            message: 'Imię musi zawierać min. 2 znaki',
                        },
                    })}
                    style = {{ border: (errors.name ? `2px solid ${colors.errorColor}` : '') }}
                />
                <ErrorWrapper>{errors.name?.message}</ErrorWrapper>
            </div>
            <div className='form__input-email'>
                <input
                    placeholder={emailPlaceholder}
                    {...register('email', {
                        required: 'To pole jest wymagane',
                        pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: 'Wprowadź prawidłowy adres e-mail',
                        }
                    })}
                    style = {{ border: (errors.email ? `2px solid ${colors.errorColor}` : '') }}
                    />
                    <ErrorWrapper>{errors.email?.message}</ErrorWrapper>
            </div>
            <div className='form__textarea'>
                <textarea
                    placeholder={shortBio}
                    {...register('textarea', {
                        required: 'To pole jest wymagane',
                        minLength: {
                            value: 15,
                            message: `Wiadomość musi składać się z min. 15 znaków`
                        }
                    })}
                    style = {{ border: (errors.textarea ? `2px solid ${colors.errorColor}` : '') }}
                    />
                <ErrorWrapper>{errors.textarea?.message}</ErrorWrapper>
            </div>
            <GenderWrapper>
                <p>Płeć:</p>
                <div className='form__gender'>
                    <RadioWrapper
                        className='form__gender-items'
                        style = {{ border: errors.gender ? `2px solid ${colors.errorColor}` : '' }}>
                        <RadioItem>
                            <input
                                type='radio'
                                {...register('gender', { required: 'To pole jest wymagane' })}
                                value='woman'
                                id='woman'
                                />
                            <label htmlFor='woman'>
                                Kobieta
                            </label>
                        </RadioItem>
                        <RadioItem>
                            <input
                                type='radio'
                                {...register('gender', { required: 'To pole jest wymagane' })}
                                value='man'
                                id='man'
                                />
                            <label htmlFor='man'>
                                Mężczyzna
                            </label>
                        </RadioItem>
                    </RadioWrapper>
                    <ErrorWrapper>{errors.gender?.message}</ErrorWrapper>
                </div>
            </GenderWrapper>
            <StatuteWrapper
                className='form__checkbox'>
                <div
                    className='form__checkbox-item'
                    style = {{ border: (errors.checkbox ? `2px solid ${colors.errorColor}` : '') }}
                >
                    <input
                        type='checkbox'
                        id='statute'
                        {...register('checkbox', { required: 'To pole jest wymagane' })}
                        style={{marginRight: '7px'}}
                    />
                    <label htmlFor='statute'>
                        Akceptuję warunki <a href='/' style={{ color: colors.mainBrightColor}}>regulaminu</a>
                    </label>
                </div>
                <ErrorWrapper>{errors.checkbox?.message}</ErrorWrapper>
            </StatuteWrapper>
            <Button className='form__button' buttonTitle='wyślij'></Button>
            {!isSubmitSuccessful && <SentInfoWrapper></SentInfoWrapper>}
            {isSubmitSuccessful && <SentInfoWrapper>Formularz wysłany pomyślnie!</SentInfoWrapper>}
        </form>
    );
}

export default FormWithUseForm;