import {connect, useSelector} from 'react-redux';
import {useEffect} from 'react';

import {GlobalStyles} from '../styles/Global';
import * as S from './styles';
import Login from '../Login';
import Chat from '../Chat';
import {MessageProvider} from '../Chat/context/Message';
import { get_messages } from '../../services';

function logout(){
  return{
    type:"LOGOUT"
  }
}

function loadMessages(objarr){
  console.log("load messages", objarr);
  return{
      type: 'STORED_MESSAGES',
      payload: objarr
  }
}


function App({dispatch}) {
  const logedIn = useSelector(state => state.logon.logedIn)
  const nickname = useSelector(state => state.logon.nickname)
  
  useEffect(() => {
    // console.log("app montado");
    get_messages().then((resp) => resp.json()).then(data => {
      // console.log("m", data)
      dispatch(loadMessages(data));
    })

  }, [dispatch])
  
  useEffect(() => {
    console.log("esta logado");

  }, [logedIn])

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
