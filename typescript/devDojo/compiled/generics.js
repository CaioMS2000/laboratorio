"use strict";
function reverList(list) {
    let reversed = [];
    for (let i = list.length - 1; i >= 0; i--)
        reversed.push(list[i]);
    return reversed;
}
let names = ['A', 'B', 'C'];
let numbers = [1, 2, 3];
let revNames = reverList(names);
let revNumbers = reverList(numbers);
console.log(revNames);
console.log(revNumbers);
const reverListArr = (list) => {
    let reversed = [];
    for (let i = list.length - 1; i >= 0; i--)
        reversed.push(list[i]);
    return reversed;
};
revNames = reverListArr(names);
revNumbers = reverListArr(numbers);
console.log(revNames);
console.log(revNumbers);
//# sourceMappingURL=generics.js.map