// here is a = undefined , but it stored into different memory location.it is strict.
let a = 10; 
console.log(a);
a =20; // we can reassign. but cannot redeclare

const b = 20 ; // it is also stores in different memory space. it is more strict than let.

// b = 30 ; // cannot reassign coz stores into different space. it return error.

console.log(b);