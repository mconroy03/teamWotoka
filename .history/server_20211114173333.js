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
    user: "Wotoka_F2021",
    host: "45.55.136.114",
    password: "time4AChange!",
    database: "Wotoka_F2021"
})

db.connect(function(err){
    if (err) throw err;
    console.log("Database Wotoka_F2021 is connected.")
})



app.get('/hello', (req, res) => {
    res.render(
        <h1></h1>
    );
})


app.listen('8080', () => { 
    console.log("Server running on port 3001")
})