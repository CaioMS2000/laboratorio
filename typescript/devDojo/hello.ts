var p = document.createElement('p');
var ola :string = 'Hello there my brother!';

p.textContent = ola;

document.body.appendChild(p)

let arr1 :number[] = [1, 2, 3];
let arr2 :Array<number> = [1, 2, 3];

enum Day{Monday, Tuesday}

let day1 :Day = Day.Monday;
let day2 :Day = 1;

console.log(day1)
console.log(day2)
console.log(Day[0])

function add(a :number, b :number, c ?:number) :number{
    let res = a + b;

    if (c !== undefined)
        res += c;

    return res;
}

let str1 :any = "text";
let strLen :number = (<string> str1).length;
let strUppcs :string = (str1 as string).toUpperCase();

console.log(str1)
console.log(strLen)
console.log(strUppcs)

function sub(a :number, ...b :number[]): any{
    let res = a;

    for(let i = 0; i < b.length; i++)
        res -= b[i];
    
    return res;
}