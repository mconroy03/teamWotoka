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

    alert('in newItem() function')
    let itemName = document.getElementById("itemName").valueOf();
    let dateFound = document.getElementById("datefound");
    let timeLog = document.getElementById("timeLogged");
    let categorySelect = document.getElementById('categorySelect');
    let category = categorySelect.options[categorySelect.selectedIndex].value;
    let desc = document.getElementById("itemDesc").value;
    let locationFound = document.getElementById("locationFound").value;
    let locationDetails = document.getElementById("locationDetails").value;
    let personFound = document.getElementById("locationDetails").value;
    let valueSelect = document.getElementById('itemValue');
    let value = valueSelect.options[valueSelect.selectedIndex].value;

    let table = document.getElementById("adminTable");
    let row = table.insertRow(-1);
    

    let itemNameRow = row.insertCell(1);
    let dateFoundRow = row.insertCell(1);
    let timeLogRow = row.insertCell(2);
    let categoryRow = row.insertCell(3);
    let descRow = row.insertCell(4);
    let locationFoundRow = row.insertCell(5);
    let locationDetailsRow = row.insertCell(6);
    let personFoundRow = row.insertCell(7);
    let valueRow = row.insertCell(8);
   

    itemNameRow.innerHTML = itemName;
    dateFoundRow.innerHTML = dateFound;
    timeLogRow.innerHTML = timeLog;
    categoryRow.innerHTML = category;
    descRow.innerHTML = desc;
    locationFoundRow.innerHTML = locationFound;
    locationDetailsRow.innerHTML = locationDetails;
    personFoundRow.innerHTML = personFound;
    valueRow.innerHTML=value;


    

}