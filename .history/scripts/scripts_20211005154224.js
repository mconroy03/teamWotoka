function fakeLogin(form){
    let id = document.getElementById("inputEmail").value;
    let passw = document.getElementById("inputPassword").value;

    let adminU = "admin@aurora.edu";
    let adminP = "admin";
    let stuU = "student@aurora.edu";
    let stuP = "student";

    if(id == adminU && passw == adminP){
        alert(id + "   " + passw)

    }else{
        alert(`Nope: ${id} ${passw}`)

    }
}