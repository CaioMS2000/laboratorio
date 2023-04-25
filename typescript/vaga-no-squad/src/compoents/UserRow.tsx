import styles from '@/styles/Home.module.css'
import { FaPlus, FaMinus } from 'react-icons/fa';

export interface User{
    name: string;
    rounds: number;
    id: number;
}

export const UserRow = ({user}: {user: User}) => {
    const {
        h1, 'page-content': page_content, name, rounds,
        'action-icon': action_icon, main, 'bordered-row': bordered_row,
        head, minus, plus, 'add-button': add_button, form, 'form-group': form_group
    } = styles;

    return (
      <div className={`user-row row ${bordered_row}`}>
        <div className={`col-8 ${name} name`}>{user.name}</div>
        <div className={`col-2 ${rounds} rounds`}>{user.rounds}</div>
        <div className={`col-1 ${action_icon} ${plus} action-icon`} style={{cursor:"pointer"}}
        onClick={() => {}}
        >
          <FaPlus />
        </div>
        <div className={`col-1 ${action_icon} ${minus} action-icon`} style={{cursor:"pointer"}}
        onClick={() => {}}
        >
          <FaMinus />
        </div>
      </div>
  )
}