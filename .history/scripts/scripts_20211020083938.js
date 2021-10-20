function fakeLogin(){
    let id = document.getElementById("inputEmail").value;
    let passw = document.getElementById("inputPassword").value;

    let adminU = "admin@aurora.edu";
    let adminP = "admin";
    let stuU = "student@aurora.edu";
    let stuP = "student";

    if(id == adminU && passw == adminP){
        alert(id + "   " + passw)
        window.location.href="admin.html";
    }else if(id == stuU && passw == stuP){
        alert(id + "   " + passw)
        window.location.href="user.html";
    }
    else{
        alert(`Nope: ${id} ${passw}`)

    }
}

function  newItem(){

    let itemName = document.getElementById("itemName").value;
    let dateFound = document.getElementById("datefound").value;
    let timeLog = document.getElementById("timeLogged").value;
    let categorySelect = document.getElementById('categorySelect');
    let category = categorySelect.options[select.selectedIndex].value;
    let desc = document.getElementById("itemDesc").value;
    let locationFound = document.getElementById("locationFound").value;
    let locationDetails = document.getElementById("locationDetails").value;
    let personFound = document.getElementById("locationDetails").value;
    let valueSelect = document.getElementById('itemValue');
    let value = valueSelect.options[select.selectedIndex].value;

    let table = document.getElementById("adminTable");

    let oStr = `<tr><td>${itemName}</td><td>${dateFound}</td><td>${timeLog}</td><td>${category}</td><td>${desc}</td><td>${locationFound}</td><td>${locationDetails}</td><td>${personFound}</td><td>${value}</td></tr>`;



}