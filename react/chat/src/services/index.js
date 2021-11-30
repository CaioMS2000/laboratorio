export function getAPI(){
    const json = fetch("http://127.0.0.1:8000/users").then((resp) => resp.json())
    .then(function(data) {
      console.log(data)
    })
}