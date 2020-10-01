function index() {
    let app = document.getElementById("app");    
    let h3 = document.createElement("h3");
    h3.innerHTML = "Player Times";

    app.appendChild(h3);

    visitorLocation();
}

function visitorLocation() {
    if (!navigator.geolocation) {
        alert("GeoLocation tidak didukung didalam browser anda, silahkan gunakan browser lain");
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

function success(position) {
    playerTimes(position.coords.latitude, position.coords.longitude)
}

function error() {
    alert("Lokasi tidak dapat akses");
}

function playerTimes(latitude, longitude) {
    fetch('http://api.aladhan.com/v1/calendar?latitude='+latitude+'&longitude='+longitude+'&method=2').then(
        response => response.json()
    ).then(function(response) {
        console.log(response.data[0]);
    });
}

index();