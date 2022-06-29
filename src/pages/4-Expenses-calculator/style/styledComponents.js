import styled from 'styled-components';
import colors from 'components/helpers/colors';

export const PositionTypeWrapper = styled.div`
    text-align: center;
    margin: 10px auto 0;
    max-width: 50%;
    color: ${colors.mainBrightColor};
    border-radius: 5px;
`;

export const RadioWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 5px;
    border: 2px solid transparent;
    border-radius: 5px;
`;

export const RadioItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    width: 100px;
`;

export const CategoryWrapper = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const ErrorWrapper = styled.p`
    height: 16px;
    color: ${colors.errorColor};
    font-size: 12px;
`;