import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import { IconContext } from "react-icons";
import {BsArrowRightSquareFill} from 'react-icons/bs';

import * as S from './styles'

function login(nick, pswd){
    return{
        type: 'LOGIN',
        nickname: nick,
        password: pswd,
        logedIn: true
    }
}

function loginn(nick, pswd){
    return login(nick, pswd);
}

const Login = ({dispatch}) => {
    const nickInput = useRef();
    const passwordInput = useRef();
    const button = useRef();

    useEffect(() => {
        // console.log("login montado");
    }, [])

    return (
        <>
        <S.Container>
            <S.Title>
                <p style = {{lineHeight:"25vh"}}>LOGIN</p>
            </S.Title>
            <S.Body>
                <S.Input type="text" ref = {nickInput}
                onKeyPress = { e => {
                    if(e.key === "Enter"){
                        passwordInput.current.focus();
                    }
                }}/>
                <S.Input type="text" ref = {passwordInput}
                onKeyPress = { e => {
                    if(e.key === "Enter"){
                        button.current.click();
                    }
                }}/>
                <IconContext.Provider value={{ color: '#9c9c9c', size: '50px' }}>
                    <S.Button onClick = { () => dispatch(loginn(nickInput.current.value, passwordInput.current.value)) } ref = {button}>
                        <BsArrowRightSquareFill style = {{width:"10vw", height: "10vh"}}/>
                    </S.Button>
                </IconContext.Provider>
            </S.Body>
        </S.Container>
        </>
    );
}

export default connect()(Login);