
document.getElementById("button").addEventListener("click", (event) => {
    const url = "http://apodapi.herokuapp.com/api/";
    fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        let results = "";
        document.getElementById("photo").src = json.hdurl;
    });
});