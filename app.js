import { add,multiplay } from "./Q1.js";

console.log("addition"+add(10,5));
console.log("multiplication"+multiplay(10,5));


// Q.14

import greet from "./Q1.js"

console.log(greet("rahul"));

// Q.15

const { add, subtract, multiply } = require("./calculator");

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));