document.addEventListener('DOMContentLoaded', function() {  //load a dom file first
    function fetchDataFromAPI() {
        return new Promise((resolve, reject) => {
            fetch("")
            fetch("https://dog.ceo/api/breeds/image/random")
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    }

    // Usage
    fetchDataFromAPI()
        .then((data) => {
            console.log("Data fetched:", data);

            // Create an img element
            const img = document.createElement('img');
            img.src = data.message;
            img.alt = "Random Dog Image";

            // Append the img element to the document
            document.getElementById('image-container').appendChild(img);
        })
        .catch((error) => console.error("Error fetching data:", error));
});
