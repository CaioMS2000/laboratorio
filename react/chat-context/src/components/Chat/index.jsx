import React, {useRef, useEffect, useState} from 'react';
import { IconContext } from "react-icons";

import * as S from './styles';
import {useMessage} from './context/Message';
import * as API from '../../services';

function renderMessages(array){
    // console.log("renderizando")
    const res = array.map((e, i) => {
        // console.log(e)
        return <S.Message className = "message" key = {e.id}><p><span className="nick">{e.id}</span>:<span>&nbsp;&nbsp;</span>{e.content}</p></S.Message>
    })

    return res;
}

const Chat = ({dispatch}) => {
    const { message, setMessage } = useMessage();
    const messages = useSelector(state => state.send.messages);
    const nickname = useSelector(state => state.logon.nickname)
    const input = useRef();
    const button = useRef();
    const messageScreen = useRef();
    const [loadedMessages, setMessages] = useState(<></>);

    
    useEffect(() => {
        if(messages.length > 0){
            setMessages(renderMessages(messages));
        }
    }, [messages]);

    useEffect(() => {
        const scrollToBottom = () => {
            messageScreen.current.scrollTop = messageScreen.current.scrollHeight;
        }

        scrollToBottom();
    }, [loadedMessages]);

    return (
        <S.Container className = "Chat-Container">
            <IconContext.Provider value={{ color: '#9c9c9c', size: '50px' }}>
                <S.Messages ref = {messageScreen}>{loadedMessages}</S.Messages>
                <S.TypeSend>
                    <S.Input 
                    onChange = {e => {setMessage(e.target.value)}}
                    onKeyPress = { e => {
                        if(e.key === "Enter"){
                            button.current.click();
                        }
                    }}
                    ref = {input}/>
                    <S.Button
                    ref = {button}
                        onClick = {() => {
                            dispatch(ChatActions.sendMessage(message, nickname));
                            input.current.value = ''
                        }}
                    >Send</S.Button>
                </S.TypeSend>
            </IconContext.Provider>
        </S.Container>
    )
}

export default Chat;