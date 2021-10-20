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
    // <h5>Item Name</h5>
    //           <input type="text" id="itemName">
    //           <h5>Date Found</h5>
    //           <input type="date" id="dateFound">
    //           <h5>Time Logged</h5>
    //           <input type="time" id="timeLogged">
    //           <h5>Item Category</h5>
    //           <select id="categorySelect">
    //             <option value="actual value 1">Display Text 1</option>
    //             <option value="actual value 2">Display Text 2</option>
    //             <option value="actual value 3">Display Text 3</option>
    //           </select>
    //           <h5>Item Description</h5>
    //           <input type="text" id="itemDesc">
    //           <h5>Location Found</h5>
    //           <input type="text" id="locationFound">
    //           <h5>Location Details</h5>
    //           <input type="text" id="locationDetails">
    //           <h5>Who Found It</h5>
    //           <input type="text" id="personName">
    //           <h5>Item Value</h5>
    //           <input type="text" id="itemValue"></input>

    let itemName = document.getElementById("itemName").value;
    let dateFound = document.getElementById("datefound").value;
    


}