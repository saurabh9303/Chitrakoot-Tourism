'use strict';
require('dotenv').config()
const express = require("express");
const ejs = require("ejs");
const expressLayouts = require('express-ejs-layouts');
const app = express();
const path=require('path');

//Static Files
app.use(express.static(path.resolve("./public/")));

// Set Templating Engine and Layout
app.use(expressLayouts);
app.set("layout", "./Layout/General");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Colls_Feedback=require('./Models/Colls_Feedback.js');
//Index
app.get("/", (req, res) => {
        res.render("./Home/index");
});

app.post("/", (req, res) => {
    const feedback=new Colls_Feedback({
        Name :req.body.name,
        Email:req.body.email,
        Feedback: req.body.message,
    });
    feedback.save().then(() => {
        res.render("./Home/index",{msg:"Feedback saved successfully"});
    }).catch((err) => {
        res.render("./Home/index",{msg:"Failed to save"});
    });
});
app.get("/feedbacks", (req, res) => {
    Colls_Feedback.find().then((fb)=>{
        console.log(fb);
        res.render("./Home/feedback",{feedbacks:fb});
    });
});
app.get("/login", (req, res) => {
   res.render("./Home/login");
});
app.listen(process.env.PORT || 3000, () => console.log("server is running"));
