import {useEffect} from 'react';

import {GlobalStyles} from '../styles/Global';
import * as S from './styles';
import Login from '../Login';
import Chat from '../Chat';
import Home from '../Home';
import SignUp from '../SignUp';
import {MessageProvider} from '../Chat/context/Message';
import {LoginProvider} from '../Login/context/Login';

import * as API from '../../services';

function App({dispatch}) {
  const logedIn = 0;
  const nickname = 0;
  const signedUp = 0;
  const signingUp = 0;

  return (
    <>
    <S.UserName className = "UserName">
      <span
        onClick = { () => dispatch() }
      className="global-nick"
      style = {{cursor: 'pointer'}}
      >
        {nickname}</span>
    </S.UserName>
      <S.AppWrapper className = "AppWrapper">
        <GlobalStyles className = "GlobalStyles"/>
        <LoginProvider>
          <MessageProvider className = "MessageProvider">
            {
              (signedUp)?((logedIn)? <Chat/>:<Login/>):((signingUp)?<SignUp/>:<Home/>)
            }
          </MessageProvider>
        </LoginProvider>
      </S.AppWrapper>
    </>
  );
}

export default App;
