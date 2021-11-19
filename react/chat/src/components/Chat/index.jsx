import React from 'react';
import {connect} from 'react-redux';
import { IconContext } from "react-icons";

import * as S from './styles';
import {useMessage} from './context/Message'
import MessageProvider from './context/Message'

function sendMessage(msg){
    return{
        type: 'SEND_MESSAGE',
        message: msg
    }
}

const Chat = ({dispatch}) => {
    const { message, setMessage } = useMessage();

    return (
        <S.Container>
            <IconContext.Provider value={{ color: '#9c9c9c', size: '50px' }}>
                <MessageProvider>
                    {message}
                    <S.Messages/>
                    <S.TypeSend>
                        <S.Input onChange = {e => {setMessage(e.target.value)}}/>
                        <S.Button onClick = {() => dispatch(sendMessage())}>Send</S.Button>
                    </S.TypeSend>
                </MessageProvider>
            </IconContext.Provider>
        </S.Container>
    )
}

export default connect(state => {})(Chat);