let btn = document.getElementById("btnCount");

btn.addEventListener('click', () => {

    let headings = document.getElementsByTagName("h2");

    for (const iterator of headings) {
        console.log(headings)
    }

})