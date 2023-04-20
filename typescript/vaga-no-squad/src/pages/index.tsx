import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { FaPlus, FaMinus } from 'react-icons/fa';
import { FormEvent, useState, useEffect, useRef } from 'react';

interface User{
  name: string;
  rounds: number;
  id: number;
}


export default function Home() {
    const {
        h1, 'page-content': page_content, name, rounds,
        'action-icon': action_icon, main, 'bordered-row': bordered_row,
        head, minus, plus, 'add-button': add_button, form, 'form-group': form_group
    } = styles;

    const [creatingPlayer, setCreatingPlayer] = useState(false)
    const [users, setUsers] = useState<User[]>([]);

    async function fetchUsers(){
      const res = await fetch('/api/users')
      const data = await res.json()

      setUsers(data)
      console.log(users)
    }

    async function removeUser(name: string){
      const res = await fetch('/api/users', {
        method: 'POST',
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

    async function changeUserRounds({name, rounds}: {name: string, rounds: number}){
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
      console.log(data)
    }

    useEffect(() => {
      fetchUsers()

    }, []);

    function NewUserButton(){
        return(
            <div className={`${add_button}`}
            onClick={switchCreating}
            >
                Adicionar novo jogador
            </div>
        )
    }
    
    function NewUserForm(){
        return (
            <form className={`${form}`}
            onSubmit={handleSubmit}
            >
                <div className={`form-group`}>
                    {/* <label htmlFor="name" className={`form-label`}>Nome</label> */}
                    <input id="name" type="text" className={`form-control`} placeholder='nome...'/>
                </div>
                <div className={`form-group`}>
                    {/* <label htmlFor="rounds" className={`form-label`}>Vagas</label> */}
                    <input id="rounds" type="number" className={`form-control`} placeholder='0'/>
                </div>
                <button type="submit" className={`btn btn-primary`}>CRIAR</button>
            </form>
        )
    }

    function switchCreating(){
        setCreatingPlayer(prevState => !prevState)
    }

    function handleSubmit(event: FormEvent){
        event.preventDefault()

        switchCreating()
    }

    // function UserRow(user: User){
    function UserRow({user}: {user: User}){
      const [userRounds, setUserRounds] = useState<number>(user.rounds)
      let value = userRounds
      console.log(`${user.name} tem ${user.rounds}`)

      async function handleChangeRounds(operation: string){
        console.log(`operation: ${operation}`)
        if(operation == '+'){
          value = userRounds
          value++
          setUserRounds(value)
          await changeUserRounds({
            name: user.name,
            rounds: value
          })
        }

        else if(operation == '-'){
          value = userRounds
          value--
          if(value == 0){
            await removeUser(user.name)
            console.log(`exluido usuario: ${user.name}`)
          }
          else{
            setUserRounds(value)
            await changeUserRounds({
              name: user.name,
              rounds: value
            })
          }
        }
      }

      return (
        <div className={`user-row row ${bordered_row}`}>
          <div className={`col-8 ${name} name`}>{user.name}</div>
          <div className={`col-2 ${rounds} rounds`}>{userRounds}</div>
          <div className={`col-1 ${action_icon} ${plus} action-icon`} style={{cursor:"pointer"}}
          onClick={() => handleChangeRounds('+')}
          >
            <FaPlus />
          </div>
          <div className={`col-1 ${action_icon} ${minus} action-icon`} style={{cursor:"pointer"}}
          onClick={() => handleChangeRounds('-')}
          >
            <FaMinus />
          </div>
        </div>
      )
    }

  return (
    // <div>
    // <div className={styles["page-content"]}>
    <div className={page_content}>
      <Head>
        <title>Comp do LOL</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/toplane.png" />

      </Head>
      {/* <h1 className={styles.h1}>CONTROLE DE VAGAS</h1> */}
      <h1 className={`${h1} text-center`}>CONTROLE DE VAGAS</h1>
      <main className={`container-fluid ${main}`}>
        <div id="add-form" className={`row d-flex justify-content-center`}>
            <div className={`col-5 d-flex justify-content-center`}>
                {creatingPlayer? NewUserForm() : NewUserButton()}
            </div>
        </div>
        <div className={`row`}>
            <div className={`col-12`}>
                <div id="players-grid" className={`container-sm`}>
                    <div className={`row head ${head} ${bordered_row}`}>
                        <div className={`col-8 ${name} name`}>Nick</div>
                        <div className={`col-4 ${rounds} rounds`}>Vagas</div>
                    </div>
                    {
                      users.map((user, index) => {
                        return (user.rounds>0? <UserRow key={index} user={user} />: null)
                      })
                    }
                    {/* <div className={`row ${bordered_row}`}>
                        <div className={`col-8 ${name} name`}>Someone</div>
                        <div className={`col-2 ${rounds} rounds`}>10</div>
                        <div className={`col-1 ${action_icon} ${plus} action-icon`}>
                            <FaPlus />
                        </div>
                        <div className={`col-1 ${action_icon} ${minus} action-icon`}>
                            <FaMinus />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
      </main>
    </div>
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