import React, {Component, createRef, useRef} from 'react';
import './Editor.css';
import ReactDOM from 'react-dom';
import {Container, Top, IframeContainer, Iframe} from './styles/Editor'

const Header = (props) => {
    return (
        // <div className="top">
        // </div>
        <Top></Top>
    );
}

const Content = (props) => {

    const ifrm = useRef(null);
    const switchEditMode = () => {
        //const ifrm = document.querySelector('iframe')
  
        if(ifrm.contentDocument.designMode === "Off"){
            ifrm.contentDocument.designMode = "On"
        }
        else{
            ifrm.contentDocument.designMode = "Off"
        }
    }

    const cmd = (command) => {
        const ifrm = document.querySelector('iframe')
        ifrm.document.execCommand(command, false, null)
    }
    
    return (
        // <div id="iframe">
        //     <iframe title = "iframe" ></iframe>
        // </div>
        <IframeContainer>
            <Iframe></Iframe>
        </IframeContainer>
    );
}

/*class Content extends Component {
    constructor(props) {
        super(props);
        this.myref = createRef();
    }

    switchEditMode = () => {
    *const ifrm = document.querySelector('iframe')
  
        // if(ifrm.contentDocument.designMode === "Off"){
        //     ifrm.contentDocument.designMode = "On"
        //     console.log("tava off")
        // }
        // else{
        //     ifrm.contentDocument.designMode = "Off"
        // }
  
        if(this.myref.contentDocument.designMode === "Off"){
            this.myref.contentDocument.designMode = "On"
            console.log("tava off")
        }
        else{
            this.myref.contentDocument.designMode = "Off"
        }
    }

    cmd = (command) => {
        const ifrm = document.querySelector('iframe')
        ifrm.document.execCommand(command, false, null)
    }

    render(){
        return (
            // <div id="iframe">
            //     <iframe title = "iframe" ref = { this.myref } onLoad = {this.switchEditMode}></iframe>
            // </div>
            <iframe title = "iframe" ref = { this.myref }></iframe>
        );
    }
}*/

const Editor = (props) => {

    return (
        // <div className="container">
        //     <Header></Header>
        //     <Content></Content>
        // </div>
        <Container>
            <Header></Header>
            <Content></Content>
        </Container>
    );
}

export default Editor