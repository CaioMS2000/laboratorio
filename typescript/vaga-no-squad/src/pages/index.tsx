import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { FormEvent, useState, useEffect, useContext } from 'react';

import { User, UserRow } from '../compoents/UserRow';
import { NewUserButton } from '../compoents/NewUserButton';
import { NewUserForm } from '../compoents/NewUserForm';
import { CreatingContext, ContextType } from '../context/creatingContext';

export default function Home() {
    const {
        h1, 'page-content': page_content, name, rounds,
        main, 'bordered-row': bordered_row, head
    } = styles;

    const [users, setUsers] = useState<User[]>([]);
    const { creatingPlayer, setCreatingPlayer } = useContext<ContextType>(CreatingContext) ?? {}

    async function fetchUsers(){
      const res = await fetch('/api/users')
      const data = await res.json()

      setUsers(data)
    }

    useEffect(() => {
      console.clear()
      fetchUsers()
      console.log(users)

    }, []);
    
    useEffect(() => {
      setUsers(users)

    }, [users]);

  return (
    <div className={page_content}>
      <Head>
        <title>Comp do LOL</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/toplane.png" />

      </Head>
      <h1 className={`${h1} text-center`}>CONTROLE DE VAGAS</h1>
      <main className={`container-fluid ${main}`}>
        <div id="add-form" className={`row d-flex justify-content-center`}>
            <div className={`col-5 d-flex justify-content-center`}>
                {creatingPlayer? <NewUserForm fetchUsers={fetchUsers}/> : <NewUserButton />}
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
                        return (user.rounds>0? <UserRow key={index} user={user} fetchUsers={fetchUsers}/>: null)
                      })
                    }
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}