//Import path module
const path = require("path");

//Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, "db/database.sqlite");

//Create connection to SQLite database
const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true,
});

//Create a table in the database called "users"
knex.schema
  //Make sure no "users" table exists
  //before trying tocreate new
  .hasTable("users")
  .then((exists) => {
    if (!exists) {
      //If no "users" table exists
      //create new, with "id", "first_name", "last_name", "email",
      //"gender", "ip_address" columns
      //and use "id" as a primary identification
      //and increment "id" with every new record (user)
      return knex.schema
        .createTable("users", (table) => {
          table.increments("id").primary();
          table.string("first_name");
          table.string("last_name");
          table.string("email");
          table.string("gender");
          table.string("ip_address");
        })
        .then(() => {
          //Log success message
          console.log("Table 'Users' created");
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`);
        });
    }
  })
  .then(() => {
    //Log success message
    console.log("done");
  })
  .catch((error) => {
    console.error(`There was an error setting up the database: ${error}`);
  });

knex
  .select("*")
  .from("users")
  .then((data) => console.log("data:", data))
  .catch((err) => console.log(err));

//Export the database
module.exports = knex;
