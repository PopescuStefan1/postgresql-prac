import pkg from "pg";
const { Pool } = pkg;

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
export default new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "stefan",
  database: "top_users",
  password: "password",
  port: 5432, // The default port
});
