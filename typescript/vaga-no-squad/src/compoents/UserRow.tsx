import styles from '@/styles/Home.module.css'
import { FaPlus, FaMinus } from 'react-icons/fa';

import { changeUserRounds, removeUser } from '../utils/api';
import { useEffect, useState } from 'react';

export interface User{
    name: string;
    rounds: number;
    id: number;
}

export const UserRow = ({user}: {user: User}) => {
    const {
        name, rounds, 'action-icon': action_icon, 'bordered-row': bordered_row, minus, plus
    } = styles;

    const [userRounds, setUserRounds] = useState<number>(1)

    async function increment(){
      const newValue = user.rounds +1;

      setUserRounds(newValue)
      await changeUserRounds({
        name: user.name,
        rounds: newValue
      })
    }

    async function decrement(){
      const newValue = user.rounds -1;

      if(newValue <= 0){
        await removeUser(user.name)
      }
      else{
        await changeUserRounds({
          name: user.name,
          rounds: newValue
        })
      }

      setUserRounds(newValue)
    }

    useEffect(()=>{
      setUserRounds(user.rounds)
    }, [])

    return (
      <div className={`user-row row ${bordered_row}`}>
        <div className={`col-8 ${name} name`}>{user.name}</div>
        <div className={`col-2 ${rounds} rounds`}>{userRounds}</div>
        {/* <div className={`col-2 ${rounds} rounds`}>{user.rounds}</div> */}
        <div className={`col-1 ${action_icon} ${plus} action-icon`} style={{cursor:"pointer"}}
        onClick={() => {
          increment()
        }}
        >
          <FaPlus />
        </div>
        <div className={`col-1 ${action_icon} ${minus} action-icon`} style={{cursor:"pointer"}}
        onClick={() => {
          decrement()
        }}
        >
          <FaMinus />
        </div>
      </div>
  )
}