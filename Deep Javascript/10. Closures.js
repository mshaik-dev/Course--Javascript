function x(){
    var a=7;
    function y(){
        console.log(a)
    }
    return y;
}
const z = x();

z();
