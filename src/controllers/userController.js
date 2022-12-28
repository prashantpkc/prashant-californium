const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

module.exports.createUser = async function (abcd, xyz) {
  let data = abcd.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.send({ msg: savedData });
};
//======================================================================================//

module.exports.loginUser = async (req, res) => {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "californium",
      organisation: "FunctionUp",
    },
    "functionup-californium-very-very-secret-key"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};
//======================================================================================//

module.exports.getUserData = async (req, res) => {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};
//======================================================================================//

module.exports.updateUser = async (req, res) => {
  let userId = req.params.userId;

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    userData,
    { new: true }
  );
  res.send({ status: updatedUser, data: updatedUser });
};
//======================================================================================//

module.exports.deleteUser = async (req, res) => {
  let userId = req.params.userId;

  let deletedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    { $set: { isDeleted: true } },
    { new: true }
  );
  res.send({ status: true, data: deletedUser });
};


