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
    

    let itemNameRow = row.insert(0);
    let dateFoundRow = row.insert(1);
    let timeLogRow = row.insert(2);
    let categoryRow = row.insert(3);
    let descRow = row.insert(4);
    let locationFoundRow = row.insert(5);
    let locationDetailsRow = row.insert(6);
    let personFoundRow = row.insert(7);
    let valueRow = row.insert(8);
   

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