const jwt = require("jsonwebtoken");
var decode;
module.exports = (req, res, next) => {
  console.log(req.headers,444);
  // try {
  //   const token = req.headers.authorization.split(" ")[1];
  //   //jwt.verify(token, "eb_sales_ex@ct_encryption");
  //   //setting up the looged in user details
  //   const decodedToken = jwt.verify(token,"PoleApp@_Encryption");
  //   req.userData = { userId: decodedToken.userId, username: decodedToken.username };
  //   console.log(req.userData);
  //   next();
  // } catch (error) {
  //   res.status(401).json({ message: "Auth failed!" });
  // }







  if(req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    //jwt.verify(token, "eb_sales_ex@ct_encryption");
    //setting up the looged in user details
    //JSON.parse(token) JSON.parse(JSON.stringify(userData))
    const decodedToken = jwt.verify(JSON.parse(token),"PoleApp@_Encryption");
    console.log(decodedToken,28);
    req.userData = { userId: decodedToken.userId, username: decodedToken.username };
    console.log(req.userData,30);
    next();
  }
   else {
    res.status(401).json({ message: "Auth failed!" });
  }
};
