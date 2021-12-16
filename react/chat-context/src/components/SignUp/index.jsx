import React, {useRef, useEffect} from 'react';
import { IconContext } from "react-icons";

import * as S from './styles'
import {useSignUp} from '../context/SignUp';

const SignUp = () => {
    const nickInput = useRef();
    const passwordInput = useRef();
    const button = useRef();
    const { signedUp, setSignedUp, signingUp, setSigningUp } = useSignUp();

    return (
        <>
        <S.Container>
            <S.Title>
                <p style = {{lineHeight:"25vh"}}>SIGN UP</p>
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
                    <S.Button
                    onClick = { () => dispatch() } 
                    ref = {button}>
                        REGISTER
                    </S.Button>
                </IconContext.Provider>
            </S.Body>
        </S.Container>
        </>
    );
}

export default SignUp;