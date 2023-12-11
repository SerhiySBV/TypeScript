"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
let age;
let firstName;
let toggle;
let empty;
let notInitialize;
let callback = (a) => { return 100 + a; };
age = 50;
firstName = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => { return 100 + a; };
//# sourceMappingURL=app.js.map