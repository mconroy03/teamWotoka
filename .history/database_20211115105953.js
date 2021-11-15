

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