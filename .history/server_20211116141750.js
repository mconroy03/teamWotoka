const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const db = require('../teamWotoka/database');

app.set('view engine', 'pug' );
app.use(express.json());
app.use(express.static());
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(cors());


app.get('/hello', (req, res) => {
    res.render('login');
})


app.listen('8080', () => { 
    console.log("Server running on port 3001")
})