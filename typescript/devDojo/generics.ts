function reverList<T>(list : Array<T>) :Array<T>{
    let reversed :T[] = [];

    for(let i = list.length - 1; i >= 0; i--)
        reversed.push(list[i]);

    return reversed;
}

let names = ['A', 'B', 'C'];
let numbers = [1, 2, 3];

let revNames = reverList<string>(names);
let revNumbers = reverList<number>(numbers);

console.log(revNames)
console.log(revNumbers)

const reverListArr = <T>(list : Array<T>) :Array<T> => {
    let reversed :T[] = [];

    for(let i = list.length - 1; i >= 0; i--)
        reversed.push(list[i]);

    return reversed;
}

revNames = reverListArr<string>(names);
revNumbers = reverListArr<number>(numbers);

console.log(revNames)
console.log(revNumbers)