import styled from 'styled-components'

const WH = 90;
const mTop = (100 - WH) / 2;

export const Container = styled.div`
    background-color: rgba(140, 50, 50, 1);
    width: ${WH}vw;
    height: ${WH}vh;
    margin: ${mTop}vh auto 0 auto;
    border-radius: 10px;
`;

export const Messages = styled.div`
    background-color: rgba(66, 135, 245, 1);
    width: 100%;
    height: 92%;
    border-radius: 10px 10px 0 0;
`;

export const TypeSend = styled.div`
    background-color: rgba(66, 245, 120, 1);
    width: 99%;
    height: 5.7%;
    padding: 10px 4px;
    border-radius: 0 0 10px 10px;
`;

export const Input = styled.input`
    &:focus{
        border: 5px solid rgba(0, 0, 0, 0.7);
        background-color: rgba(20, 20, 20, 1);
        color: rgba(100, 100, 100, 1);
    };
    background-color: rgba(30, 30, 30, 1);
    width: 80%;
    height: 80%;
    font-size: 16pt;
    text-align: left;
    border-radius: 10px;  
    border: 5px solid rgba(0, 0, 0, 0);
    font-family: 'Oswald', sans-serif;
    margin: 0 20px 0 0;
    color: rgba(219, 219, 219, 1);
    padding: 0 5px 0 5px;
`;

export const Button = styled.button`
    background-color: #000;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-size: 15pt;
    font-weight: 800;
    color: #fff;
    width: 10%;
    height: 80%;
    border-radius: 10px;
`;