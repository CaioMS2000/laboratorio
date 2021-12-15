import React from 'react'

import * as S from './styles';

const Home = ({dispatch}) => {
    return (
        <S.Container>
            <S.Label>LIVE CHAT</S.Label>
            <S.Button
            onClick = { () => dispatch(SignUpActions.SignUp(true)) }>
            LOGIN
            </S.Button>
            <S.Button 
            onClick = { () => dispatch(HomeActions.register()) }>
                SIGN UP
            </S.Button>
        </S.Container>
    )
}

export default Home;
