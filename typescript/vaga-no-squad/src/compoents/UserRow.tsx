import styles from '@/styles/Home.module.css'
import { FaPlus, FaMinus } from 'react-icons/fa';
import { changeUserRounds, removeUser } from '../utils/api';
import { useEffect, useState } from 'react';

export interface User{
    name: string;
    rounds: number;
    id: number;
}

interface UserRowProps{
  user: User;
  fetchUsers: () => void;
}

export const UserRow = ({ user, fetchUsers }: UserRowProps) => {
    const {
        name, rounds, 'action-icon': action_icon, minus, plus
    } = styles;

    const [userRounds, setUserRounds] = useState<number>(1)
    const [isVisible, setIsVisible] = useState<boolean>(true)

    async function increment(){
      const newValue = user.rounds +1;
      setUserRounds(newValue)
      await changeUserRounds({
        name: user.name,
        rounds: newValue
      })
      fetchUsers()
    }

    async function decrement(){
      const newValue = user.rounds -1;

      if(newValue <= 0){
        setIsVisible(false)
        await removeUser(user.name)   
      }
      else{
        setIsVisible(true)
        
        await changeUserRounds({
          name: user.name,
          rounds: newValue
        })
        setUserRounds(newValue)
      }

      fetchUsers()
    }

    useEffect(()=>{
      setUserRounds(user.rounds)
    }, [])

    if (!isVisible) return null;

    return (
      <div className={`user-row row`}
      >
        <div className={`col-8 ${name} name`}>{user.name}</div>
        <div className={`col-2 ${rounds} rounds`}>{userRounds}</div>
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
