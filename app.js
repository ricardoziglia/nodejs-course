const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const rootPath = require("./util/path");

const app = express();

app.set("view engine", "pug"); //template compiler
app.set("views", "views"); //template folder (by default is /views folder)

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootPath, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render("404", { title: "Page not found" });
});

app.listen(3000);
