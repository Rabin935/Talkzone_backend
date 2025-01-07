//Initialize
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require('./Database/db');
// const userRoutes = require('./routes/userRoutes');

// creating a sevrver
const app = express();
// Creating a PORT
const PORT = process.env.PORT || 5000;

// creating a middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.send("this is Webpage");
})

app.get('/ourpartners', (req, res)=>{
    res.send("Your partners");
})

app.listen(PORT, ()=>{
    console.log(`Server running on port........... ${PORT}`);
})