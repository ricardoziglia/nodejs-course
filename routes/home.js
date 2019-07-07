const express = require('express');

const userData = require('./user');

const router = express.Router();

router.get('/', (req, res, next) => {
  const users = userData.users;
  res.render('home', {
    users,
    pageTitle: 'Users',
    path: '/'
  });
});

module.exports = router;
