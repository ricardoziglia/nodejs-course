const path = require("path");

const express = require("express");

const rootPath = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {title: 'Shop', products});
});

module.exports = router;
