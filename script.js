document.addEventListener("DOMContentLoaded", function() {
    const jokeContainer = document.getElementById("joke");
    const newJokeButton = document.getElementById("new-joke-button");


    function fetchJoke() {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(response => response.json())
            .then(data => {
                jokeContainer.textContent = data.value;
            })
            .catch(error => {
                jokeContainer.textContent = "Oops! Something went wrong.";
                console.error("Error fetching joke:", error);
            });
    }

    fetchJoke();


    newJokeButton.addEventListener("click", fetchJoke);
});
