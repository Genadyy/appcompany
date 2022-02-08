const express = require("express");

//Import controller
const usersRoutes = require("./../controllers/controller.js");

//Create router
const router = express.Router();

//Add route for GET request to retrieve all users
//In server.js, users route is specified as '/users'
//This mean that '/all' translates to '/users/all'
router.get("/all", usersRoutes.usersAll);

//Add route for POST request to create new user
//In server.js, users route is specified as '/users'
//This mean that '/create' translates to '/users/create'
router.post("/create", usersRoutes.usersCreate);

router.put("/reset", usersRoutes.usersReset);

//Export router
module.exports = router;
