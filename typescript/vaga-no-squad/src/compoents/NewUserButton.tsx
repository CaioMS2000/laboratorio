import styles from '@/styles/Home.module.css'
import { FormEvent, useState, useEffect, useRef } from 'react';

export const NewUserButton = () => {
    const {
        h1, 'page-content': page_content, name, rounds,
        'action-icon': action_icon, main, 'bordered-row': bordered_row,
        head, minus, plus, 'add-button': add_button, form, 'form-group': form_group
    } = styles;

    const [creatingPlayer, setCreatingPlayer] = useState(false)
    function switchCreating(){
        setCreatingPlayer(prevState => !prevState)
    }

    return(
        <div className={`${add_button}`}
        onClick={switchCreating}
        >
            Adicionar novo jogador
        </div>
    )
}