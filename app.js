const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
//const blogRoutes = require("./routes/blogRoutes");

//express app
const app = express();

//connect to mongodb
const dbURI = "mongodb+srv://m3-4:m3-4dbuser1106@clusterm3-4.6lb4p.mongodb.net/ClusterM3-4?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
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
    res.redirect("/index");
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

//blog routes
//app.use("/blogs", blogRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
})