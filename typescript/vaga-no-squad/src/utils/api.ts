export async function removeUser(name: string){
    const res = await fetch('/api/users', {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        name
        })
    })

    const data = await res.json()
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