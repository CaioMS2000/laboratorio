function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./assets', true, /\.(png|jpe?g|svg)$/));
  