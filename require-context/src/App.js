import logo from './logo.svg';
import './App.css';

// function importAll(r) {
//   return r.keys().map(r);
// }
// const images = importAll(require.context('./images', true, /\.(png|jpe?g|svg)$/));

const images = {}

function importAll(r) {
  r.keys().reduce((acc, key) => {
    images[key.replace('./', '')] = r(key);
  }, {});
}


function App() {
  console.clear()
  
  importAll(require.context('./images', true, /\.(png|jpe?g|svg)$/));

  Object.entries(images).map(([nome, caminho]) => {
    console.log(nome)
    console.log(caminho)
    return null
  })

  console.log(images)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
