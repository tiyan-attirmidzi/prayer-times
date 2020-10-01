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
    console.log(position);
}

function error() {
    alert("Lokasi tidak dapat akses");
}

index();