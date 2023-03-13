async function fetchData(str = ''){
    const response = await fetch(`https://rickandmortyapi.com/api/${str}`)
    const data = await response.json()

    console.log(data)
    
    return data
}

let res = null
fetchData('character').then(e => {
    console.log(e)
    res = e
})

console.log(`number of characters is ${res}`)
