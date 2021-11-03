import React from 'react';
import './Editor.css';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div className="top">
            <div className="options">
                <ul>
                    <li className="itens">N</li>
                    <li className="itens">I</li>
                    <li className="itens">S</li>
                    <li className="itens">C</li>
                    <li className="itens">R</li>
                    <li className="itens">T</li>
                    <li className="itens">L</li>
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