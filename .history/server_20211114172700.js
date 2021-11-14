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




app.get('/loginPage', (req, res) => {
    res.render('login');
})


app.listen('8080', () => { 
    console.log("Server running on port 3001")
})