const React = (function(){
    let _state = [];
    let index = 0;

    function useState(initialValue){
        state = _state[index] || initialValue;
        let _index = index;

        function setState(newValue){
            _state[_index] = newValue
        }

        index++

        return [state, setState]
    }

    function render(component){
        index = 0;

        const x =  component()

        x.render()

        return x;
    }

    return {useState, render}
})()

function wrapper(){
    const {useState} = React;
    let [num, setNum] = useState(1);

    return {
        render: () => console.log(`${num} was rendered`),
        click: () => setNum(num+1),
    }
}

const {render} = React;

let rendered = render(wrapper)
rendered.click()
rendered = render(wrapper)