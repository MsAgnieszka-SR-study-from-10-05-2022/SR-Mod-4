import styled from 'styled-components';
import colors from 'components/helpers/colors';

export const GenderWrapper = styled.div`
    text-align: center;
    margin-top: 10px;
    color: ${colors.mainBrightColor};
    border-radius: 5px;
`;

export const RadioWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 5px;
`;

export const RadioItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    width: 100px;
`;

export const StatuteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ErrorWrapper = styled.p`
    height: 16px;
    color: ${colors.errorColor};
    font-size: 12px;
`;

export const SentInfoWrapper = styled(ErrorWrapper)`
    height: 16px;
    color: ${colors.greenColor};
    font-size: 14px;
    font-weight: bold;
`;