const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const path = require('path');
const managerFunctionsRoutes = require("./routes/managerFunctionsRoutes");

// Load config file
dotenv.config({ path: './config/.env' })

//express app
const app = express();

//connect to mongodb
const dbURI = process.env.DB_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(process.env.PORT))
    .catch((err) => console.log(err)); 

// register view engine
app.set("view engine", "ejs");

////middleware and static files
//here we are specficying that the 'public' folder can be looked in for files 
app.use(express.static("public"));
//takes the url encoded dataa and passes that into an oject we can use with the req when doing form data stuff 
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
    // res.redirect("/managerFunctions");
    res.render('dashboard.ejs');
});

app.get("/about", (req, res) => {
    res.render('about.ejs', { title: 'About'});
    // res.render("about", { title: "About" });
}); 

//managerFunction routes
app.use("/managerFunctions", managerFunctionsRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render("404", { title: "404 | Page Not Found" });
})