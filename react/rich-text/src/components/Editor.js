import React, {Component, createRef, useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';

import './Editor.css';
import {Container, Top, IframeContainer, Iframe, basicTypeBold} from './styles/Editor';

import
{
    FaBold, FaItalic, FaUnderline, FaStrikethrough, FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify,
    FaCut, FaCopy, FaIndent, FaOutdent, FaSubscript, FaSuperscript, FaUndoAlt, FaListUl, FaListOl, FaRedoAlt,
    FaParagraph, FaLink, FaUnlink, FaCode, FaImages, FaLinkedin
}
from "react-icons/fa";

let functional = true

const Header = (props) => {
    return (
        <Top>
            <button> <FaBold></FaBold> </button>
            <button> <FaItalic></FaItalic> </button>
            <button> <FaUnderline></FaUnderline> </button>
            <button> <FaStrikethrough></FaStrikethrough> </button>
            <button> <FaAlignLeft></FaAlignLeft> </button>
            <button> <FaAlignCenter></FaAlignCenter> </button>
            <button> <FaAlignRight></FaAlignRight> </button>
            <button> <FaAlignJustify></FaAlignJustify> </button>
            <button> <FaCut></FaCut> </button>
            <button> <FaCopy></FaCopy> </button>
            <button> <FaIndent></FaIndent> </button>
            <button> <FaOutdent></FaOutdent> </button>
            <button> <FaSubscript></FaSubscript> </button>
            <button> <FaSuperscript></FaSuperscript> </button>
            <button> <FaUndoAlt></FaUndoAlt> </button>
            <button> <FaRedoAlt></FaRedoAlt> </button>
            <button> <FaListUl></FaListUl> </button>
            <button> <FaListOl></FaListOl> </button>
            <button> <FaParagraph></FaParagraph> </button>
            <select name="H" id="">
                <option value="H1">H1</option>
                <option value="H2">H2</option>
                <option value="H3">H3</option>
                <option value="H4">H4</option>
                <option value="H5">H5</option>
                <option value="H6">H6</option>
            </select>
            <button>HR</button>
            <button> <FaLink></FaLink> </button>
            <button> <FaUnlink></FaUnlink> </button>
            <button> <FaCode></FaCode> </button>
            <button>Edit</button>
            <select name="fonts" id="">
                <option value="Arial">Arial</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
                <option value="Courier">Courier</option>
                <option value="Georgia">Georgia</option>
                <option value="Tahomas">Tahomas</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Verdana">Verdana</option>
            </select>
            Font: <input type = "color"/>
            Background: <input type = "color"/>
            <button> <FaImages></FaImages> </button>
            <button>Select all</button>
        </Top>
    );
}

const Contentt = (props) => {

    const ifrm = useRef()

    const enableEditMode = () => {
        console.log(ifrm.current.contentWindow.document)
        ifrm.current.contentWindow.document.designMode = "on"
    }
    
    const disableEditMode = () => {
        console.log(ifrm.current.contentWindow.document)
        ifrm.current.contentWindow.document.designMode = "off"
    }

    const cmd = (command) => {
        ifrm.current.contentWindow.document.execCommand(command, false, null)
    };

    // mount and update
    // useEffect(() => {
    //     console.log("mounted or updated")
    // })

    // mounted
    useEffect(() => {
        console.log("mounted", ifrm)
        enableEditMode()
    }, [])

    // updated
    // useEffect(() => {
    //     console.log("mounted", ifrm)
    // }, "array não vazio (variaveis)")
    
    // unmount
    // useEffect(() => {
    //     return () => {}
    // }, "array não vazio (variaveis)")
    
    return (
        <IframeContainer>
            <Iframe ref = {ifrm} ></Iframe>
        </IframeContainer>
    );
}

class Content extends Component {
    constructor(props) {
        super(props);
        this.myref = React.createRef();
    }

    enableEditMode = () => {
        console.log(this.myref.current.contentWindow.document)
        this.myref.current.contentWindow.document.designMode = "on"
    }
    
    disableEditMode = () => {
        console.log(this.myref.current.contentWindow.document)
        this.myref.current.contentWindow.document.designMode = "off"
    }

    cmd = (command) => {
        this.myref.current.contentWindow.document.execCommand(command, false, null)
    }

    componentDidMount(){
        this.enableEditMode()
    }

    render(){
        return (
            // <iframe title = "iframe" ref = { this.myref }></iframe>
            <Iframe ref = {this.myref}></Iframe>
        );
    }
}

const Editor = (props) => {

    return (
        <Container>
            <Header></Header>
            {functional? <Contentt></Contentt>:<Content></Content>}
        </Container>
    );
}

export default Editor