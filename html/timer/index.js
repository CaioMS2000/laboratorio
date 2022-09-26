let interval;

function not_zero(a, b){
    if(a == 0 && b == 0){
        return false;
    }

    return true;
}

// document.querySelector('input').addEventListener()

document.querySelector('input').addEventListener('input', e => {
    if(!e.target.value.includes(':')){
        let value = e.target.value;

        if(value.length == 0){
            e.target.value = "00:00";
        }
        else if(value.length == 1){
            e.target.value = `00:0${value}`;
        }
        else if(value.length == 2){
            e.target.value = `00:${value}`;
        }
        else if(value.length == 3){
            e.target.value = `0${value[0]}:${value[1]+value[2]}`;
        }
        else{
            e.target.value = `${value[0]+value[1]}:${value[2]+value[3]}`;
        }
    }
});

document.querySelector('input').addEventListener('keyup', e => {
    if(e.key == "Enter"){
        document.querySelector('button').click();
        document.querySelector('input').blur();
    }
})

document.querySelector('button').addEventListener('click', e => {
    let value = document.querySelector('input').value;
    value = value.split(":");
    value = [Number(value[0]), Number(value[1])];

    // getComputedStyle(document.querySelector(), null).getPropertyValue("background-color");
    console.log(getComputedStyle(document.querySelector('button'), null).getPropertyValue("background-color"));
    e.target.style.backgroundColor = "#fff";

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
                min = `0${min}`;
            }
            
            document.querySelector('input').value = `${min}:${s}`

            let str = document.querySelector('input').value;

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

            document.querySelector('input').value = str;

            if(Number(s) == 0 && Number(min) == 0){
                clearInterval(interval);
                document.querySelector('audio').play()
            }
        }, 1000);
    }
});