const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3000;

dotenv.config();
const app = express();

//Middleware
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.set("view engine","ejs");

//Routes
const destinationRoutes = require("./routes/index");
app.use("/",destinationRoutes);


//Start server
app.listen(PORT,()=>{
    console.log(`Server running on https://localhost:${PORT}`);
})