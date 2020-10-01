let app = document.getElementById("app"); 

function index() {
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
        let date = new Date();
        let today = date.getDate() - 1;
        let data = response.data[today].timings;
        // element
        let tabel = document.createElement('table');
        let tabelTbody = document.createElement('tbody');

        for(i in data) {
            let row = tabelTbody.insertRow();
            let name = row.insertCell(0);
            let time = row.insertCell(1);
            name.innerHTML = i;
            time.innerHTML = data[i];
            tabelTbody.appendChild(row);
        };

        tabel.appendChild(tabelTbody);
        app.appendChild(tabel)

    });
}

index();