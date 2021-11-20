import React, {useRef} from 'react';
import {connect} from 'react-redux';
import { IconContext } from "react-icons";

import * as S from './styles';
import {useMessage} from './context/Message';

function sendMessage(msg){
    return{
        type: 'SEND_MESSAGE',
        message: msg
    }
}

const Chat = ({dispatch}) => {
    const { message, setMessage } = useMessage();
    const input = useRef();

    return (
        <S.Container>
            <IconContext.Provider value={{ color: '#9c9c9c', size: '50px' }}>
                <S.Messages/>
                <S.TypeSend>
                    <S.Input onChange = {e => {setMessage(e.target.value)}} ref = {input}/>
                    <S.Button
                        onClick = {() => {
                            dispatch(sendMessage(message));
                            input.current.value = ''
                        }}
                    >Send</S.Button>
                </S.TypeSend>
            </IconContext.Provider>
        </S.Container>
    )
}

export default connect(state => {})(Chat);