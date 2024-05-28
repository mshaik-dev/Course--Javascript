// callback

function a(callback){
    console.log("a case");
    callback();
}

function b(){
    console.log("b case")
}
a(b);

// promise

const promise =  new Promise((res,rej)=>{

    
})
