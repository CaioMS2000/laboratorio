import {connect, useSelector} from 'react-redux';
import {useEffect} from 'react';

import {GlobalStyles} from '../styles/Global';
import * as S from './styles';
import Login from '../Login';
import Chat from '../Chat';
import {MessageProvider} from '../Chat/context/Message';

function logout(){
  return{
    type:"LOGOUT"
  }
}

function App({dispatch}) {
  const logedIn = useSelector(state => state.logon.logedIn)
  const nickname = useSelector(state => state.logon.nickname)

  useEffect(() => {
    console.log("app montado");
  }, [])

  return (
    <>
    <S.UserName className = "UserName">
      <span
      onClick = { () => dispatch(logout()) }
      className="global-nick"
      style = {{cursor: 'pointer'}}
      >
        {nickname}</span>
    </S.UserName>
      <S.AppWrapper className = "AppWrapper">
        <GlobalStyles className = "GlobalStyles"/>
        <MessageProvider className = "MessageProvider">
          {logedIn?<Chat className = "Chat"></Chat>:<Login className = "Login"></Login>}
        </MessageProvider>
      </S.AppWrapper>
    </>
  );
}

export default connect()(App);
