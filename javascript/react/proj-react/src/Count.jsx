import { useState, useEffect } from "react";

function Count(){
    const [counter, setCounter] = useState(0)
    const [text, setText] = useState('')

    // mounted
    useEffect(() => {
        console.log("mounted\n")
    }, [])

    return(
        <>
        <table>
            <tbody>
            <tr>
                <td><input type="text" name="txt" id="txt" onInput = {e => {setText(e.target.value)}} /></td>
                <td>
                    <div className="text">{text}</div>
                </td>
            </tr>
                <tr>
                    <td><button onClick = {() => {setCounter(counter+1)}}>press it</button></td>
                    <td>{counter}</td>
                </tr>
            </tbody>
        </table>
        </>
        
    )
}

export default Count;