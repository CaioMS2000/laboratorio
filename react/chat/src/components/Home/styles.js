import styled from 'styled-components'

export const Container = styled.div`
    color: #fff;
    font-family: 'Permanent Marker', cursive;
    background-color: rgba(140, 50, 50, 1);
    width: 30vw;
    height: 20vh;
    margin: 25vh auto 0 auto;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    `;

export const Button = styled.div`
    font-family: 'Poppins', sans-serif;
    background-color: rgba(14, 5, 50, 1);
    width: 10vw;
    height: 6vh;
    margin: 2vh auto;
    line-height: 6vh;
    border-radius: 10px;
    cursor: pointer;
    font-size: 2.2vw;
    
    &:hover{
        color: rgba(181, 181, 181, 1);
        background-color: rgba(21, 8, 77, 1);
    }
`;

export const Label = styled.div`
    font-weight: 800;
    font-size: 4vw;
    width: 100%;
    background-color: rgba(14, 5, 50, 1);
    line-height: 10vh;
    border-radius: 10px 10px 0 0;
`;