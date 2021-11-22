import {useSelector} from 'react-redux';
import {GlobalStyles} from '../styles/Global';

import * as S from './styles';
import Login from '../Login';
import Chat from '../Chat';
import {MessageProvider} from '../Chat/context/Message';

function App() {
  const logedIn = useSelector(state => state.logon.logedIn)
  const nickname = useSelector(state => state.logon.nickname)

  return (
    <>
    <S.UserName className = "UserName">
      {nickname}
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

export default App;
