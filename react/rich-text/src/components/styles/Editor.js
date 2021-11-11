import styled from "styled-components";
import {TypeBold} from "@styled-icons/bootstrap/TypeBold"

export const Container = styled.div`
    top:5vh;
    border: 2px solid rgba(0, 128, 0, 0.658);
    width: 90vw;
    height: 90vh;
    margin: auto;
    position: relative;
    box-shadow: 0px 0px 4px black;
    overflow: hidden;
    border-radius: 5px;
    background-color: rgba(116, 60, 138, 0.678);
`

export const Top = styled.div`
    height: 20%;
    width: 100%;
    background-color: rgb(82, 143, 63);
    font-size: 13pt;
    border-bottom: 1px solid rgb(100, 100, 100);
`

export const IframeContainer = styled.div`
    height: 80%;
    width: 90vw;
    background-color: rgb(138, 60, 60);
`

export const Iframe = styled.iframe`
    height: 100%;
    width: 100%;
    background-color: rgb(133, 138, 60);
`

export const basicTypeBold = styled(TypeBold)`
    color: #000;
    font-size: 30pt;
`