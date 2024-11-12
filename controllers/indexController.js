import db from "../db/queries.js";

export const logAvailableUsernames = async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
};

export const userCreateGet = (req, res) => {
  res.render("newUser");
};

export const userCreatePost = async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
};
