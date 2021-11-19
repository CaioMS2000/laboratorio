import React from 'react';
import {connect} from 'react-redux';
import { IconContext } from "react-icons";
import {BsArrowRightSquareFill} from 'react-icons/bs';

import * as S from './styles'

const Login = () => {
    return (
        <>
        <S.Container>
            <S.Title>
                <p style = {{lineHeight:"25vh"}}>LOGIN</p>
            </S.Title>
            <S.Body>
                <S.Input type="text" />
                <IconContext.Provider value={{ color: '#9c9c9c', size: '50px' }}>
                    <S.Button>
                        <BsArrowRightSquareFill style = {{width:"10vw", height: "10vh"}}/>
                    </S.Button>
                </IconContext.Provider>
            </S.Body>
        </S.Container>
        </>
    );
}

export default connect(state => {})(Login);