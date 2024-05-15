// Variables Can be declared using: var, let, const,

//  var is a functional scope or global scope
// let and const are local scope

var name = "sunil";

console.log(name );

// we can redeclare variable
var name = "suman"
console.log(name);


let age = 12 ;

// let age = 14;  cannot redeclare

age = 14; // but we can reassign

console.log(age);


const address = "6/778";

// cannot redeclare and reassign

console.log(address);