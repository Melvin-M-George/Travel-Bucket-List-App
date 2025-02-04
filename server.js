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
const destinationRoutes = require("./routes/routes");
app.use("/",destinationRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));


//Start server
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})