import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import { IconContext } from "react-icons";
import {BsArrowRightSquareFill} from 'react-icons/bs';

import * as S from './styles'

function sendNick(nick){
    return{
        type: 'SEND_NICK',
        nick: nick,
        logedIn: true
    }
}

function login(nick){

    return sendNick(nick);
}

const Login = ({dispatch}) => {
    const input = useRef();
    const button = useRef();

    useEffect(() => {
        console.log("login montado");
    }, [])

    return (
        <>
        <S.Container>
            <S.Title>
                <p style = {{lineHeight:"25vh"}}>LOGIN</p>
            </S.Title>
            <S.Body>
                <S.Input type="text" ref = {input}
                onKeyPress = { e => {
                    if(e.key === "Enter"){
                        button.current.click();
                    }
                }}/>
                <IconContext.Provider value={{ color: '#9c9c9c', size: '50px' }}>
                    <S.Button onClick = { () => dispatch(login(input.current.value)) } ref = {button}>
                        <BsArrowRightSquareFill style = {{width:"10vw", height: "10vh"}}/>
                    </S.Button>
                </IconContext.Provider>
            </S.Body>
        </S.Container>
        </>
    );
}

export default connect()(Login);