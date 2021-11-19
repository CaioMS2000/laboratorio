import styled from 'styled-components';

const WH = 50;
const mTop = (100 - WH) / 2;

export const Container = styled.div`
    width: ${WH}vw;
    height: ${WH}vh;
    background-color: rgba(40, 40, 40, 1);
    margin: 0 auto;
    margin-top: ${mTop}vh;
    border-radius: 21px;
`;

export const Title = styled.div`
    background-color: rgba(250, 234, 127, 0);
    width: 100%;
    height: 30%;
    font-size: 50pt;
    border-radius: 21px 21px 0 0;
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
    height: 50%;
    font-size: 35pt;
    text-align: center;
    margin-top: 8vh;
    border-radius: 51px;  
    border: 5px solid rgba(0, 0, 0, 0);  
`;