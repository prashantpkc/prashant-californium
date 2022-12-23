const User = require("../models/userModel");

module.exports.createUser = async (req, res, next) => {
  let { name } = req.body;
  if (!name) return res.send({ message: "name is required" });
  let userCreate = await User.create(req.body);
  res.send({ userCreate });
};
