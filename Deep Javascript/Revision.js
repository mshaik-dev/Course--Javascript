document.addEventListener('DOMContentLoaded', function() {
// // closures

// // A closure is a function in lexical enivornment. which we can access even the function is closed.
// function outer(){

//     var x ="yaseen"
//     function inner(){
// return x;
//     }
//     return inner()
// }

// const result = outer();
// console.log(result);

// // --- Higher order function

// // A higher order function are regular functions that takes other function as an argument (or) return the function as a result

// function applyOperation(operation,x,y){

//     return operation(x,y);

// }

// function add(x,y){

//     return x+y;
// }


// function subtraction(x,y){
//     return x-y;
// }

// function multiplication(x,y){
//     return x*y
// }

// const sum = applyOperation(add,5,4);
// const subtract = applyOperation(subtraction,10,4);
// const multiply =applyOperation(multiplication,4,5);

// console.log("sum :" + sum);
// console.log("Difference :" + subtract);
// console.log("Multiplication :" + multiply);


// callbacks

// Function that takes a callback and executes it after a specified dela



// function delayedCallback(callback, delay) {
//     setTimeout(callback, delay);
//   }
  
  // Usage: Define the callback function
//   function greet() {
//     console.log("Hello, this is a callback function!");
//   }
  
//   // Call the delayedCallback function with the greet callback after 2 seconds
//   delayedCallback(greet, 2000);
  

//   ---------------Promises-----------------

function fetchDataFromAPI() {
    
    return new Promise((resolve, reject) => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
  
  // Usage
  fetchDataFromAPI()
    .then((data)=> {
         console.log("Data fetched:", data)
    const img = document.createElement('img')
     img.src = data.message; // data.message contains the image URL
     img.alt = "Random Dog Image";


    // Append the img element to the document
    document.getElementById('Image-container').appendChild(img);

    })
});
