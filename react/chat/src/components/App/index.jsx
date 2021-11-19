import {Provider} from 'react-redux';
import {GlobalStyles} from '../styles/Global'
import * as S from './styles'

import Login from '../Login';
import store from '../store';
import Chat from '../Chat';

const logado = true;

function App() {
  return (
      <S.AppWrapper>
      <Provider store = {store}>
        <GlobalStyles/>
        {logado?<Chat></Chat>:<Login></Login>}
        </Provider>
    </S.AppWrapper>
  );
}

export default App;
