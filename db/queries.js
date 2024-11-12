import pool from "./pool.js";

async function getAllUsernames(searchParam) {
  console.log(searchParam);
  if (!searchParam) {
    const { rows } = await pool.query("SELECT * FROM usernames");
    return rows;
  }

  const { rows } = await pool.query("SELECT * FROM usernames WHERE username LIKE ($1)", [`%${searchParam}%`]);
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

export default { getAllUsernames, insertUsername };
