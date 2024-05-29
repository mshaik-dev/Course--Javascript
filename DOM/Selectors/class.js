const menu = document.getElementById("menu")

const items = document.getElementsByClassName("item");

console.log( [].map.call(items,item => item.textContent))