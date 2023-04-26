export async function removeUser(name: string){
    console.log(`removing ${name}`)
    const res = await fetch(`/api/users?name=${name}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        name
        })
    })

    const data = await res.json()
    console.log(data)
}

export async function changeUserRounds({name, rounds}: {name: string, rounds: number}){
    const res = await fetch('/api/users', {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        name,
        rounds
        })
    })

    const data = await res.json()
    // console.log(data)
}

export async function createUser({name, rounds}: {name: string, rounds: number}){
    const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        name,
        rounds
        })
    })

    const data = await res.json()
    console.log(data)
}