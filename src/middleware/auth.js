const jwt = require("jsonwebtoken");

module.exports.authenticate = async (req, res, next) => {
  let token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
  jwt.verify(
    token,
    "functionup-californium-very-very-secret-key",
    (err, decodedToken) => {
      if (err)
        return res.status(401).send({ staus: false, message: err.message });
      req.id = decodedToken.userId;
      next();
    }
  );
};

exports.authorise = async (req, res, next) =>{
  let userId = req.params.userId;
  let id = req.id;
  if (userId !== id) return res.send({ status: false, msg: "Invalid user" });
  next();
};
