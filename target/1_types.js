"use strict";
//Strings
const str = "hello world!";
//Boolean
const isLoading = true;
const isDeployed = false;
//Numbers
const num = 45;
const num2 = 5e10;
const num3 = 4.32;
//Arrays
const arr = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = ["some", "words", "array"];
//Any
let anyValue = 42;
anyValue = "John Doe"; // Correct!
//void
function sayMyName(name) {
    console.log(name);
}
sayMyName("John Doe");
//never
function throwError(message) {
    throw new Error(message);
}
function infinityFunc() {
    while (true) {
        //do always something ...
    }
}
const login = "login";
const id1 = "1";
const id2 = 2;
