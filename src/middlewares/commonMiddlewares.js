
const mid1= ( req, res, next) => {
    if(!req.headers) return res.send({message: "request is missing a mandatory header"});
    console.log(req.headers)
    if(!req.headers.isfreeappuser) return res.send({message: "reques header must be isFreeAppUser key"});
    next();
}


module.exports= {mid1}
