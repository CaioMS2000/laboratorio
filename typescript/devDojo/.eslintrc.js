module.exports = {
    extends: [
      // Adicione aqui as extensões que você está utilizando
    ],
    rules: {
      // Outras regras aqui
      "jsx-a11y/label-has-associated-control": [
        "off", {
          "controlComponents": ["button"]
        }//não consegui fazer funcionar, pelo menos não visualmente
      ]
    }
  }