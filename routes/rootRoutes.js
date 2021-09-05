var express = require('express');
var router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const ValidateEmail = require('../middleware/ValidateEmail');
const ValidatePassword = require('../middleware/ValidatePassword');

router.get('/user', (req, res) => {
  res.send(req.user);
});

router.post('/register', async (req, res) => {
  if (!ValidateEmail(req.body.username)) {
    res.send('Must be a valid email');
    return false;
  }

  if (!ValidatePassword(req.body.password)) {
    res.send('Does not meet password requirements.');
    return false;
  }

  try {
    User.register(
      new User({
        username: req.body.username,
        email: req.body.email,
      }),
      req.body.password,
      (err, user) => {
        if (err) {
          console.log(err);
        } else {
          passport.authenticate('local')(req, res, () => {
            //Change to your preferred action
            res.send(user);
          });
        }
      }
    );
  } catch (error) {
    console.log();
  }
});

router.post('/login', passport.authenticate('local'), function (req, res) {
  //Change to your preferred action
  res.send('Logged In!');
});

module.exports = router;
