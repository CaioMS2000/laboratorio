import React, {useRef, useEffect, useState} from 'react';
import {connect, useSelector} from 'react-redux';
import { IconContext } from "react-icons";

import * as S from './styles';
import {useMessage} from './context/Message';

function sendMessage(msg, nickname){
    return{
        type: 'SEND_MESSAGE',
        message: msg,
        nickname: nickname,
    }
}

function renderMessages(array){
    
    const res = array.map((e, i) => {
        return <S.Message className = "message" key = {i}><p><span className="nick">{e.nickname}</span>:<span>&nbsp;&nbsp;</span>{e.message}</p></S.Message>
    })

    return res;
}

// function scrollToBottom(){
//     messageContainer.scrollIntoView({ behavior: "smooth" });
// }

const Chat = ({dispatch}) => {
    const { message, setMessage } = useMessage();
    const messages = useSelector(state => state.send.messages);
    const nickname = useSelector(state => state.logon.nickname)
    const input = useRef();
    const button = useRef();
    const messageScreen = useRef();
    const [loadedMessages, setMessages] = useState(<></>);

    
    useEffect(() => {
        const scrollToBottom = () => {
            // messageScreen.current.scrollIntoView({ behavior: "smooth" });
            messageScreen.current.scrollBy(0,15);
            setTimeout(scrollToBottom,1);
        }
        // console.log(messages)
        if(messages.length > 0){
            setMessages(renderMessages(messages));
        }

        scrollToBottom()
    }, [messages])

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
                            dispatch(sendMessage(message, nickname));
                            input.current.value = ''
                        }}
                    >Send</S.Button>
                </S.TypeSend>
            </IconContext.Provider>
        </S.Container>
    )
}

export default connect()(Chat);