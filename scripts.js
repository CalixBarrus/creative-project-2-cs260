
document.getElementById("button").addEventListener("click", (event) => {
    let url = "http://apodapi.herokuapp.com/api/?date=";
    let randomInt = Math.floor(Math.random() * 9000);
    url += moment().add(-randomInt, 'days').format("YYYY-MM-DD")
    fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        document.getElementById("title").innerHTML = json.title;

        document.getElementById("date").innerHTML = json.date;

        document.getElementById("photo").src = json.hdurl;

        document.getElementById("description").innerHTML = json.description;
    });
});
