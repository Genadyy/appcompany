//Import database
const knex = require("./../db");

//Retrive all users
exports.usersAll = async (req, res) => {
  knex
    .select("*") //select all records
    .from("users") //from users table
    .then((userData) => {
      // Send users extracted from database in response
      res.json(userData);
    })

    .catch((err) => {
      // Send an error message in response
      res.json({ message: `There was an error retrieving users: ${err}` });
    });
};

//Create new user
exports.usersCreate = async (req, res) => {
  //Add new user to database
  knex("users")
    .insert({
      // insert new record

      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      ip_address: req.body.ip_address,
    })
    .then(() => {
      //Send a success message in response
      res.json({
        message: `User ${req.body.first_name} ${req.body.last_name} created.`,
      });
    })
    .catch((err) => {
      //Send an error message in response
      res.json({
        message: `There was an error creating ${req.body.first_name} ${req.body.lat_name}: ${err}`,
      });
    });
};

exports.usersReset = async (req, res) => {
  knex
    .select("*")
    .from("users")
    .truncate()
    .then(() => {
      res.json({ message: `Users list cleared.` });
    })
    .catch((error) => {
      res.json({
        message: `There was an error resetting users list: ${error}`,
      });
    });
};
