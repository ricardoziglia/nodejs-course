const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    console.log(req.session.isLoggedIn);
    res.render("auth/login", {
        path: "/login",
        pageTitle: "Login",
        isAuthenticated: false
    });
};

exports.postLogin = (req, res, next) => {
    User.findById("5d30d70cc1d23c52b8c7fbfc")
    .then(user => {
        req.session.isLoggedIn = user;
        req.session.user = user;
        res.redirect("/");
    })
    .catch(err => console.log(err));
};
