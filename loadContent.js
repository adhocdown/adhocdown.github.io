// load.js
function loadContent(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text(); // Get the response as a text string
        })
        .then(htmlString => {
            // Inject the HTML string into the container
            document.getElementById('content-container').innerHTML = htmlString;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// Optional: Load a default page when the main page loads
document.addEventListener('DOMContentLoaded', (event) => {
    loadContent('home.html'); 
});
