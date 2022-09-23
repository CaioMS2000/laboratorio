let minutes = 30;
let seconds = 0;
let interval;

document.querySelector('input').addEventListener('input', e => {
    let value = document.querySelector('input').value;
    console.log(value)
})

document.querySelector('button').addEventListener('click', e => {
    let value = document.querySelector('input').value;
    value = value.split(":");
    value = [Number(value[0]), Number(value[1])];
    console.log(value)
    console.log(value[0] == 0)

    if(value[0] != 0 && value[1] != 0){
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