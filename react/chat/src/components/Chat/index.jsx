import React, {useRef, useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import { IconContext } from "react-icons";

import * as S from './styles';
import {useMessage} from './context/Message';

function sendMessage(msg){
    return{
        type: 'SEND_MESSAGE',
        message: msg
    }
}

function renderMessages(array){
    const res = array.map((e, i) => {
        return(
            <div key = {i}>{e}</div>
        )
    })

    return <>{res}</>;
}

const Chat = ({dispatch}) => {
    const { message, setMessage } = useMessage();
    const messages = useSelector(state => state.send.messages);
    const input = useRef();
    const button = useRef();
    const messageScreen = useRef();

    useEffect(() => {
        messageScreen.current.append(renderMessages(messages));
    }, [messages])

    return (
        <S.Container className = "Chat-Container">
            <IconContext.Provider value={{ color: '#9c9c9c', size: '50px' }}>
                <S.Messages ref = {messageScreen}/>
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
                            dispatch(sendMessage(message));
                            input.current.value = ''
                        }}
                    >Send</S.Button>
                </S.TypeSend>
            </IconContext.Provider>
        </S.Container>
    )
}

export default connect()(Chat);