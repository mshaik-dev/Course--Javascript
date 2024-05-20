// // // const p = new Promise((resolve,reject)=>{
// // //     resolve("promise resolved");

// // // });

// // // async function handlepromise(){

// // //     console.log(await p)
// // // }
// // // handlepromise()


// // const p = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve('Promise resolved value!!');
// //     }, 3000);
// //   })
  
// //   const p2 = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve('Promise resolved value by p2!!');
// //     }, 2000);
// //   })
  

// //   //-async await way

// //   async function handlePromise(){
// //     // Js Engine will waiting for promise to resolve

// //     const val = await p;
// //     console.log("hello there");
// //     console.log(val);

// //     const val2 = await p2;
// //     console.log("hello there! 2");
// //     console.log(val2);
// //   }
// //   handlePromise();

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Promise resolved value by p1!!');
//     }, 5000);
//   })
  
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Promise resolved value by p2!!');
//     }, 10000);
//   })
  
//   async function handlePromise() {
//     console.log('Hi');
//     debugger;
//     const val = await p1;
//     console.log('Hello There!');
//     debugger;
//     console.log(val);
  
//     const val2 = await p2;
//     console.log('Hello There! 2');
//     debugger;
//     console.log(val2);
//   }
//   handlePromise(); 
  

  //-- first scenario

  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('P1 Success');
    }, 3000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('P2 Success');
    }, 1000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('P3 fail');
    }, 200);
  });
  
  Promise.any([p1, p2, p3])
  .then((results) => 
    console.log(results))
  .catch(err =>console.error(err));; // ['P1 Success', 'P2 Success', 'P3 Success'] -> took 3 secs
  