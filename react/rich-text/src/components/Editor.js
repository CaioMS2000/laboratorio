import React from 'react';
import './Editor.css';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div className="top">
        </div>
    );
}

const Content = (props) => {

    

    const cmd = (command) => {
        const ifrm = document.querySelector('iframe')
        ifrm.document.execCommand(command, false, null)
    }
    
    return (
        <div id="iframe">
            <iframe title = "iframe" designMode="on"></iframe>
        </div>
    );
}

const Editor = (props) => {

    return (
        <div className="container">
            <Header></Header>
            <Content></Content>
        </div>
    );
}

export default Editor