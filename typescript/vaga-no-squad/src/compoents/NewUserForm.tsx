import styles from '@/styles/Home.module.css'
import { FormEvent, useState, useEffect, useContext } from 'react';

import { CreatingContext } from '../context/creatingContext';
import { createUser } from '../utils/api';

interface NewUserFormProps{
    fetchUsers: () => void;
  }

export const NewUserForm = ({ fetchUsers }: NewUserFormProps) => {
    const {
        form
    } = styles;

    const [rounds, setRounds] = useState(0)
    const [nick, setNick] = useState('')
    
    const { creatingPlayer, setCreatingPlayer } = useContext(CreatingContext) ?? {}

    async function handleSubmit(event: FormEvent){
        event.preventDefault()

        const newUser = {
            name: nick,
            rounds
        }

        if(setCreatingPlayer){
            setCreatingPlayer(prevState => !prevState)
        }

        await createUser({
            name: newUser.name,
            rounds: newUser.rounds
        })

        setRounds(0)
        setNick('')
        fetchUsers()
    }

    useEffect(() => {
        fetchUsers()
    }, [nick, rounds])

    return (
        <form className={`${form}`}
        onSubmit={handleSubmit}
        >
            <div className={`form-group`}>
                {/* <label htmlFor="name" className={`form-label`}>Nome</label> */}
                <input id="name" type="text" className={`form-control`} placeholder='nome...' value={nick}
                onChange={e => {
                    setNick(e.target.value)
                }}
                />
            </div>
            <div className={`form-group`}>
                {/* <label htmlFor="rounds" className={`form-label`}>Vagas</label> */}
                <input id="rounds" type="number" className={`form-control`} placeholder='0'
                onChange={e => {
                    setRounds(+e.target.value)
                }}
                />
            </div>
            <button type="submit" className={`btn btn-primary`}>CRIAR</button>
        </form>
    )
}

// async function handleSubmit(event) {
//   event.preventDefault();
//   const newUser = {
//     name: form.name,
//     email: form.email,
//     phone: form.phone
//   };
//   const response = await fetch('/api/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newUser)
//   });
//   const data = await response.json();
//   setUsers([...users, data]);
//   setForm({ name: '', email: '', phone: '' });
// }