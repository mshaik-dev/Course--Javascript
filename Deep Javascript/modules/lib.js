export function display(msg){
const a = document.createElement('div');
const img = document.createElement('img');
img.setAttribute("src" ,"./download.jpg");
a.appendChild(img);
const p = document.createElement("p");
p.innerText = "yes you can do it."
a.appendChild(p);
document.body.appendChild(a);
}
export function newone(){
    const  p  = document.createElement("p");
    p.innerText = "hey there, Im here."
    document.body.appendChild(p);
}