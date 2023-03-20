"use strict";
var p = document.createElement('p');
var ola = 'Hello there my brother!';
p.textContent = ola;
document.body.appendChild(p);
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
})(Day || (Day = {}));
let day1 = Day.Monday;
let day2 = 1;
console.log(day1);
console.log(day2);
console.log(Day[0]);
function add(a, b, c) {
    let res = a + b;
    if (c !== undefined)
        res += c;
    return res;
}
let str1 = "text";
let strLen = str1.length;
let strUppcs = str1.toUpperCase();
console.log(str1);
console.log(strLen);
console.log(strUppcs);
function sub(a, ...b) {
    let res = a;
    for (let i = 0; i < b.length; i++)
        res -= b[i];
    return res;
}
//# sourceMappingURL=hello.js.map