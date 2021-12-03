const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const db = require('../teamWotoka/database');

app.set('view engine', 'pug' );
app.use(express.json());
app.use(express.static('views'));
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(cors());

app.post('/loginPOST', (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    db.query(
        "SELECT * FROM UserLogin WHERE UserEmail = ? AND userPass = ?", [username, password],
        (err, result) => {
            if(err) throw err;
            if(result.length > 0){
                if(result[0].AdminPermissions == 1){
                    req.session.AdminLoggedIn = true;
                    console.log("admin session = " + req.session.AdminLoggedIn)
                    res.redirect('/admin')
                }else{
                    req.session.UserLoggedIn = true;
                    res.redirect('/userTable')
                }
            }else{
                res.send('Incorrect login, try again')
            }
            
        }
    )
   
})

app.get("/lostItemsAdmin", (req,res)=>{
    console.log(req.session.AdminLoggedIn)
    if(req.session.AdminLoggedIn){
        db.query(
            "SELECT * FROM Item",
            (err,result)=>{
                if(err) throw err;
                console.log(result)
                res.send(result)
            }
        )
    }else{
        res.send("You must be an admin to view this page")
    }
})

app.get("/lostItemUser", (req,res)=>{
    console.log(req.session.UserLoggedIn)
    if(req.session.UserLoggedIn){
        db.query(
            "SELECT * FROM Item",
            (err2,result2)=>{
                if(err2) throw err2;
                console.log(result2)
                res.send(result2)
            }
        )
    }else{
        res.send("You must log in first")
    }
})


app.get('/', (req, res) => {
    res.redirect('/login');
  });

app.get('/itemSubmission', (req, res)=>{

})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/admin', (req, res) => {
    res.render('adminLand');
})

app.get('/userTable', (req, res) => {
    res.render('userLand');
})


app.listen('8080', () => { 
    console.log("Server running on port 8080")
})