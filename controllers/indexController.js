export const logAvailableUsernames = (req, res) => {
  console.log("usernames will be logged here - wip");
};

export const userCreateGet = (req, res) => {
  res.render("newUser");
};

export const userCreatePost = (req, res) => {
  console.log("username to be saved: ", req.body.username);
};
