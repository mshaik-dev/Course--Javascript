const output = document.getElementById("output");
const button = document.getElementById("btnRate")

button.onclick = function(){
    let rating = document.getElementsByName("rate");
rating.forEach(element => {
    console.log(element)
    if(element.checked){
        output.innerText = `You selected:  ${element.value}`
    }
});
console.log(output.innerText);
}
// // const p = document.getElementById("msg");

// console.log(p)