import styles from '@/styles/Home.module.css'
import { FormEvent, useState, useEffect, useContext } from 'react';

import { CreatingContext } from '../context/creatingContext';

export const NewUserButton = () => {
    const {
        'add-button': add_button
    } = styles;    
    
    const { creatingPlayer, setCreatingPlayer } = useContext(CreatingContext)

    return(
        <div className={`${add_button}`}
        onClick={() => {
            setCreatingPlayer(prevState => !prevState)
        }}
        >
            Adicionar novo jogador
        </div>
    )
}