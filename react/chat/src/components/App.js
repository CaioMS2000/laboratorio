import {Provider} from 'react-redux';

import './App.css';
import Login from './login';
import store from './store/index';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <Login></Login>
        </Provider>
    </div>
  );
}

export default App;
