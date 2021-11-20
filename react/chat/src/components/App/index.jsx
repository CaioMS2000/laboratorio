import {Provider} from 'react-redux';
import {GlobalStyles} from '../styles/Global'
import * as S from './styles'

import Login from '../Login';
import store from '../store';
import Chat from '../Chat';
import {MessageProvider} from '../Chat/context/Message';

const logado = true;

function App() {
  return (
      <S.AppWrapper>
      <Provider store = {store}>
        <GlobalStyles/>
        <MessageProvider>
          {logado?<Chat></Chat>:<Login></Login>}
        </MessageProvider>
        </Provider>
    </S.AppWrapper>
  );
}

export default App;
