let minutes = 30;
let seconds = 0;
let interval;

function not_zero(a, b){
    if(a == 0 && b == 0){
        return false;
    }

    return true;
}

// document.querySelector('input').addEventListener()   

document.querySelector('input').addEventListener('change', e =>{
    console.log("TRIGGED");
});

document.querySelector('input').addEventListener('input', e => {
    let str = e.target.value;
    console.log("TRIGGED 2");

    if(str.length != 5){
        let [left, right] = str.split(":");

        if(left.length < 2){
            left = `0${left}`;
        }
        
        if(right.length < 2){
            right = `0${right}`;
        }

        str = `${left}:${right}`;
    }

    e.target.value = str;
})

document.querySelector('button').addEventListener('click', e => {
    let value = document.querySelector('input').value;
    value = value.split(":");
    value = [Number(value[0]), Number(value[1])];

    if(not_zero(value[0], value[1])){
        interval = setInterval(() => {
            let min, s;

            min = value[0];
            s = value[1];
            
            if(s == 0){
                s = 59;
                min--;
            }else{
                s--;
            }

            value[0] = min;
            value[1] = s;
            
            if(s < 10){
                s = `0${s}`;
            }
            
            if(min < 10){
                m = `0${min}`;
            }
            
            document.querySelector('input').value = `${min}:${s}`

            if(s == 0 && min == 0){
                clearInterval(interval);
            }
        }, 1000);
    }
});