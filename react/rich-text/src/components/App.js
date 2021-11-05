import './App.css';
import Editor from './Editor';

function App() {

  const switchEditMode = () => {
    /*const ifrm = document.querySelector('iframe')

    if(ifrm.contentDocument.designMode === "Off"){
        ifrm.contentDocument.designMode = "On"
    }
    else{
        ifrm.contentDocument.designMode = "Off"
    }*/
}

  return (
    <Editor onLoad = {switchEditMode()} ></Editor>
  );
}

export default App;
