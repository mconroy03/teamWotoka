const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");

app.set('view engine', 'pug' );
app.use(express.json());
app.use(express.static("views"));
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(cors());

const db = mysql.createConnection({
    user: "DMV_S2021",
    host: "45.55.136.114",
    password: "g0t2m0ve1t!",
    database: "DMV_S2021"
})

db.connect(function(err){
    if (err) throw err;
    console.log("Database MDV_S2021 is connected.")
})

app.post("/AdminInfo", (req, res) => {
    const adminID = req.body.id;
    const adminPW = req.body.pw;
    db.query(
        'SELECT * FROM Admin WHERE adminID = ? AND adminPW = ?',
        [adminID, adminPW],
        (err, result) => {
            console.log(`${adminID}`)
            console.log(`${adminPW}`)
            if(err) throw err;
            if(result.length > 0){
                req.session.loggedin = true;
				req.session.adminID = adminID;
                
                res.redirect('/adminTable')
            }else{
                res.send("incorrect verification")
            }
            
            
    })
});

app.post("/UserInfo", (req, res) => {
    const userID = req.body.userID;
    const userPW = req.body.userPW;

    db.query(
        'SELECT * FROM User WHERE userID = ? AND userPW = ?',
        [userID, userPW],
        (err, result) => {
            console.log(`${userID}`)
            console.log(`${userPW}`)

            if(err) throw err;
            if(result.length > 0){
                req.session.loggedin = true;
				req.session.userID = userID;

                res.redirect('/studentTable')
            }else{
                res.send("Incorrect login, try again")
            }

        }
    )
})

app.post('/submitItem', (req, res) => {
    var userID = req.body.userID;
    var phoneNum = req.body.phoneNum;
    var personFound = req.body.personFound;
    var itemName = req.body.itemName;
    var locationFound = req.body.locationFound;
    var locationDetails = req.body.locationDetails;
    var dateFound = req.body.dateFound;
    var timeFound = req.body.timeFound;
    var itemValue = req.body.itemValue;
    var description = req.body. description;

    const vals = [
        userID, phoneNum, personFound, itemName, locationFound, locationDetails, dateFound, timeFound, itemValue, description
    ]
    
    db.query("INSERT INTO lostItems (userID, phoneNum, personFound, itemName, locationFound, " +
    "locationDetails, dateFound, timeFound, itemValue, description) VALUES (?)",
    [vals], (err, result) => {
        if(err) throw err;

        console.log(`Inserted item: ${result}`)
        res.send(result)
        
    })
})

app.get("/lostItemsAdmin", (req, res) => {
    if(req.session.loggedin){
        db.query(
            "SELECT * FROM lostItems",
            (err,result) => {
                if(err) throw err;
                console.log(result)
                res.send(result)
            }
        )
    }else{
        res.send("You must be an admin to view this page")
    }
    
    
})

app.get("/lostItemsStudent", (req, res) => {
    if(req.session.loggedin){
        db.query(
            "SELECT itemName, locationFound, description FROM lostItems",
            (err,result) => {
                if(err) throw err;
                console.log(result)
                res.send(result)
            }
        )
    }else{
        res.send("You must be an student to view this page")
    }
    
    
})

app.get("/monthlyReport", (req,res)=>{
    db.query(
        "SELECT * FROM lostItems WHERE month(dateFound)=month(now())",
        (err,result)=>{
            if(err) throw err;
            console.log(result);
            res.send(result)
        }
    )

})
//select * from orders
//where month(order_date)=month(now())-1

app.get('/loginPage', (req, res) => {
    res.render('login');
})

app.get('/admin', (req, res) => {
    res.render('adminlogin')
})

app.get('/student', (req, res) => {
    res.render('studentLogin')
})

app.get('/submitLostItem', (req, res) => {
    res.render('itemSubmission')
})

app.get('/adminTable', (req, res) => {
    res.render('lostItems')
})

app.get('/studentTable', (req,res)=>{
    res.render('studentTable')
})

app.get('/showMonth', (req,res)=>{
    res.render('showMonth')
})

app.listen('3001', () => { 
    console.log("Server running on port 3001")
})