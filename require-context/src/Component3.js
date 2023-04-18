import './App.css';

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
function Component3() {
    importAll(require.context('./images/banners', true, /\.(png|jpe?g|svg)$/));

  return (
    <div className="App">
      <h1>Componente 3</h1>
    </div>
  );
}

export default Component3;
