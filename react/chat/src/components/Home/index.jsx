import React from 'react'
import {connect} from 'react-redux';

import * as S from './styles';
import * as HomeActions from '../store/actions/home';
import * as SignUpActions from "../store/actions/signup";

const Home = ({dispatch}) => {
    return (
        <S.Container>
            <S.Label>LIVE CHAT</S.Label>
            <S.Button
            onClick = { () => dispatch(SignUpActions.SignUp(true)) }>
            LOGIN
            </S.Button>
            <S.Button 
            onClick = {() => {dispatch(HomeActions.register());}}>
                SIGN UP
            </S.Button>
        </S.Container>
    )
}

export default connect()(Home);
