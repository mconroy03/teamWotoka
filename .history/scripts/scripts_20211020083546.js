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

    let oStr = `<tr><td></td><td></td><td></td><td></td><td></td></tr>"

}