function a(){
    console.log("a called")
  }
  a();

  var b = function (){
    console.log("b called");
  }
  b(); // b called


//   function(){
//     console.log("Anonymous function")
//   }

var d = function(param1){
    console.log(param1);
  }
  
  function xyz(){
  
  }
  d(xyz) // function xyz(){}
  