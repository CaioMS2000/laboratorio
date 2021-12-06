import {connect, useSelector} from 'react-redux';
import {useEffect} from 'react';

import {GlobalStyles} from '../styles/Global';
import * as S from './styles';
import Login from '../Login';
import Chat from '../Chat';
import Home from '../Home';
import SignUp from '../SignUp';
import {MessageProvider} from '../Chat/context/Message';
import { get_messages } from '../../services';
import * as ChatActions from '../store/actions/chat';
import * as LoginActions from '../store/actions/login';

function App({dispatch}) {
  const logedIn = useSelector(state => state.logon.logedIn)
  const nickname = useSelector(state => state.logon.nickname)
  const signedUp = useSelector(state => state.signup.signedUp)
  const signingUp = useSelector(state => state.register.signingUp)
  
  useEffect(() => {
    // console.log("app montado");
    get_messages().then((resp) => resp.json()).then(data => {
      // console.log("m", data)
      dispatch(ChatActions.loadMessages(data));
    })

  }, [dispatch])
  
  useEffect(() => {
    console.log("esta logado");

  }, [logedIn])

  return (
    <>
    <S.UserName className = "UserName">
      <span
        onClick = { () => dispatch(LoginActions.logout()) }
      className="global-nick"
      style = {{cursor: 'pointer'}}
      >
        {nickname}</span>
    </S.UserName>
      <S.AppWrapper className = "AppWrapper">
        <GlobalStyles className = "GlobalStyles"/>
        <MessageProvider className = "MessageProvider">
          {
            (signedUp)?((logedIn)? <Chat/>:<Login/>):((signingUp)?<SignUp/>:<Home/>)
            // <SignUp/>
          }
        </MessageProvider>
      </S.AppWrapper>
    </>
  );
}

export default connect()(App);
