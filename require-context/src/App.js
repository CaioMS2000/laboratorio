import logo from './logo.svg';
import './App.css';

// function importAll(r) {
//   return r.keys().map(r);
// }
// const images = importAll(require.context('./images', true, /\.(png|jpe?g|svg)$/));

const images = {}

function importAll(r) {
  console.log(r.keys())
  r.keys().reduce((acc, key) => {
    // images[key.replace('./', '')] = r(key);
    console.log(acc)
    console.log(key)
    console.log('')
  }, {});
}


function App() {
  console.clear()
  
  importAll(require.context('./images/projects', true, /\.(png|jpe?g|svg)$/));

  // Object.entries(images).map(([nome, caminho]) => {
  //   console.log(nome)
  //   console.log(caminho)
  //   return null
  // })

  console.log(images)
  return (
    <div className="App">
      <h1>Componente 1</h1>
    </div>
  );
}

export default App;
