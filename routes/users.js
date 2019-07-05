const path = require('path');

const express = require('express');

const rootPath = require('../util/path');

const router = express.Router();

// /users/add-product => GET
router.get('/users', (req, res, next) => {
  res.sendFile(path.join(rootPath, 'views', 'users.html'));
});

module.exports = router;
