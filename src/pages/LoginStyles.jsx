import styled from 'styled-components';

const LoginLayout = styled.main`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 52rem;
    align-content: center;
    justify-content: center;
    gap: 3.2rem;
`;
const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    /* background: #e5eff0; */
    padding: 2rem;
`;

const Img = styled.img`
    margin: 0 auto;
    width: 7rem;
`;

const FormRow = styled.div`
    display: grid;
    grid-template-columns: 30rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;

    &:nth-last-of-type(1) {
        background: red !important;
    }
    /* background: gold; */
`;
const FormRowLogin = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
`;

const Input = styled.input`
    border: none;
    padding: 1rem 1.5rem;
    color: var(--color-dark-200);
    font-size: 1.4rem;
    border-bottom: 1px solid var(--color-light-200);
    transition: all 0.3s;

    &::placeholder {
        color: var(--color-dark-100);
        font-size: 1.4rem;
        font-family: 'comic';
    }
    &:focus {
        outline: none;
        border-bottom: 1px solid var(--color-dark-100);
    }
`;

const FirstSpan = styled.span`
    width: 3rem;
    height: 3rem;
    background: var(--color-font-light);
    border-radius: 100%;
    position: absolute;
    left: 20%;
    top: 30%;
    z-index: -2;
    animation: firstBubble 6s infinite;
`;
const SecondSpan = styled.span`
    width: 1.8rem;
    height: 1.8rem;
    background: var(--color-font-light);
    border-radius: 100%;
    position: absolute;
    left: 10%;
    bottom: 40%;
    z-index: -2;
    animation: secondBubble 8s infinite;
`;
const ThirdSpan = styled.span`
    width: 4.5rem;
    height: 4.5rem;
    background: var(--color-font-light);
    border-radius: 100%;
    position: absolute;
    right: 10%;
    top: 20%;
    z-index: -2;
    animation: thirdBubble 8s infinite;
`;

const P = styled.p`
    font-size: 1.4rem;
    font-weight: 100;
    color: var(--color-dark-200);
    text-align: left;
    margin-bottom: 2rem;
    font-family: 'open-sans';
`;
const H1 = styled.h1`
    font-family: 'Coiny';
    text-transform: uppercase;
    font-size: 3rem;
`;

const FooterStyled = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & img {
        width: 15rem;
    }
`;

export {
    FirstSpan,
    SecondSpan,
    ThirdSpan,
    Input,
    FormRow,
    Form,
    LoginLayout,
    Img,
    P,
    H1,
    FooterStyled,
    FormRowLogin,
};
