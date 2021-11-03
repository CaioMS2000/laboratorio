import React from 'react';
import './Editor.css';
import ReactDOM from 'react-dom';

function getSelectionText() {
    var text = "";
    var activeEl = document.activeElement;
    var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;

    if (((activeElTagName === "textarea") || ((activeElTagName === "input") && (/^(?:text|search|password|tel|url)$/i.test(activeEl.type))))&& (typeof activeEl.selectionStart == "number")) {
        text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
    } else if (window.getSelection) {
        text = window.getSelection().toString();
    }

    activeEl.value.replace(text, '<span class = "highlighted">'+text+'</span>')
    console.log(text)
    return text;
}

const Header = (props) => {
    return (
        <div className="top">
            <div className="options">
                <ul>
                    <li className="itens"><button class = "bold" onClick = {() => getSelectionText()}>N</button></li>
                    <li className="itens"><button class = "italic" >I</button></li>
                    <li className="itens"><button class = "underlined" >S</button></li>
                    <li className="itens"><button class = "color" >C</button></li>
                    <li className="itens"><button class = "realce" >R</button></li>
                    <li className="itens"><button class = "font-sz" >T</button></li>
                    <li className="itens"><button class = "link" >L</button></li>
                </ul>
            </div>
        </div>
    );
}

const Content = (props) => {
    return (
        <textarea name="" id="" cols="30" rows="10"></textarea>
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