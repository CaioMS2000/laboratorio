import styles from '@/styles/Home.module.css'
import { FormEvent, useState, useEffect, useContext } from 'react';

import { CreatingContext } from '../context/creatingContext';

export const NewUserForm = () => {
    const {
        form
    } = styles;
    
    const { creatingPlayer, setCreatingPlayer } = useContext(CreatingContext)

    function handleSubmit(event: FormEvent){
        event.preventDefault()

        setCreatingPlayer(prevState => !prevState)
    }

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