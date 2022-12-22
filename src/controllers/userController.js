const timeAndIP = async function (req, res) {
  res.send({ msg: "This will show time stamp and IP in console" });
};

module.exports.timeAndIP = timeAndIP;
