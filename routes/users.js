var express = require('express');
var router = express.Router();
var UserService = require("../services/UserService")
var db = require("../models")
var userService = new UserService(db);
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()


router.get('/', async function(req, res, next) {
  users = await userService.getAll()
  res.render('users', {users: users});
})

router.post('/', jsonParser, async function(req, res, next) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  await userService.create(firstName, lastName);
  res.end()
});

router.delete('/', jsonParser, async function(req, res, next) {
  let id = req.body.id;
  await userService.deleteUser(id);
  res.end()
});

router.put('/', jsonParser, async function(req, res, next) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let id = req.body.id;
  await userService.changeFirstName(id, firstName, lastName);
  res.end()
});

module.exports = router;