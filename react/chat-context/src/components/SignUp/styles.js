import styled from 'styled-components';

const WH = 60;
const mTop = (100 - WH) / 2;

export const Container = styled.div`
    width: ${WH}vw;
    height: ${WH}vh;
    background-color: rgba(8, 12, 26, 1);
    margin: 0 auto;
    margin-top: ${mTop}vh;
    border-radius: 21px;
`;

export const Title = styled.div`
    background-color: rgba(250, 234, 127, 0);
    width: 100%;
    height: 30%;
    border-radius: 21px 21px 0 0;
    font-size: 80pt;
    font-family: 'Permanent Marker', cursive;
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
    background-color: rgba(71, 71, 71, 1);
    width: 90%;
    height: 25%;
    font-size: 50pt;
    text-align: center;
    margin: 2vh 0 2vh 0;
    border-radius: 51px;  
    border: 5px solid rgba(0, 0, 0, 0);
    font-family: 'Oswald', sans-serif;
    `;

export const Button = styled.button`
    background-color: rgba(3, 2, 15, 1);
    cursor: pointer;
    font-size: 30pt;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    color: rgba(82, 82, 82, 1);
    padding: 0 1vw;
    border-radius: 10px;
`;
