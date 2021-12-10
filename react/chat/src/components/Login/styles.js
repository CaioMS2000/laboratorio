import styled from 'styled-components';

const WH = 70;
const mTop = (100 - WH) / 2;

export const Container = styled.div`
    width: ${WH}vw;
    height: ${WH-25}vw;
    background-color: rgba(40, 40, 40, 1);
    margin: 0 auto;
    margin-top: ${mTop}vh;
    border-radius: 21px;
`;

export const Title = styled.div`
    background-color: rgba(250, 234, 127, 0);
    width: 100%;
    height: 30%;
    font-size: 10vw;
    border-radius: 21px 21px 0 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-style: italic;
    color: rgba(82, 82, 82, 1);
`;

export const Body = styled.div`
    background-color: rgba(200, 234, 127, 0);
    width: 100%;
    height: 70%;
    border-radius: 0 0 21px 21px;
`;

export const Input = styled.input`
    &:focus{
        border: 5px solid rgba(0, 0, 0, 0.7);
        background-color: rgba(20, 20, 20, 1);
        color: rgba(100, 100, 100, 1);
    };
    background-color: rgba(30, 30, 30, 1);
    width: 90%;
    height: 25%;
    height: 8vw;
    font-size: 5vw;
    text-align: center;
    margin: 3vh 0 1vh 0;
    border-radius: 51px;  
    border: 5px solid rgba(0, 0, 0, 0);
    font-family: 'Oswald', sans-serif;
`;

export const Button = styled.button`
    background-color: transparent;
    cursor: pointer;
`;
