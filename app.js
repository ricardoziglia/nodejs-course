const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const userData = require("./routes/user");
const shopRoutes = require("./routes/home");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(userData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render("404", { pageTitle: "Page Not Found", path:"" });
});

app.listen(3000);
