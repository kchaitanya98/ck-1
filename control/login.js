
const loginUserModel=require('../model/loginmodel');
const jwt = require("jsonwebtoken");

exports.logIN = (req, res, next)=> {

    console.log(req.query,6);
    
    loginUserModel.findOne({where:{'userId':req.query.userId,'password':req.query.password},limit:1}).then(fetchedUser => {

        console.log(fetchedUser,10);
        if(fetchedUser){
            const token = jwt.sign(
              { userId: fetchedUser.userId, username: fetchedUser.username },
              "PoleApp@_Encryption",
              { expiresIn: "7h" }
            );
            res.status(200).json({
              token: token,
              logged_in_user_id: fetchedUser.userId,
              logged_in_user_name:fetchedUser.username,
              logged_in_user_status:fetchedUser.enabled,
              logged_in_user_type:fetchedUser.designation,
              expiresIn: 3600
            });
          }

          else{
              console.log('Creds Error');
              res.json('Invalid Creds')
          }
        
    });
    // res.send({"message":"Data Received!",Data:req.body}),next();
    
}