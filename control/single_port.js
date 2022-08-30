exports.getData =  (req, res, err) =>{
    console.log("ROUTING API WORKS");
    // res.json({message:"ROUTE API WORKS !"});
    single_port.findAll().then(function (article) {
        // console.log(article);
        if(article.length>0){
            // res.json([{"message":"success",data:JSON.parse(JSON.stringify(article))}]);
            res.json({"message":"success",data:article});
        }
        if(article.length<=0) {
            res.send({"message":"success",data:"No Data Exists"});
        }
    })
    //res.send("<h4 style='color:green;text-align:center;font-family: sans-serif'>"+'Welcome To Backend!, Controller Api works!'+"</h4>");
}


const single_port=require('../model/singleportmodel');
const getbranches=require('../model/getBranches');
const getbranches_Sp=require('../model/singleport_branches');
const single_port_status=require('../model/singleport_status');
const seq = require('sequelize');


exports.singleport_submit = function (req, res, next) {

    console.log(req.body,27);
    if(req.body.ac_no!==''||req.body.branch_name!==''){
    console.log(req.body);
    console.log(req.body.primarycxlatlong);
    // single_port.single_port.findAll().then(users => console.log(users));
    single_port.create(req.body).then(users => res.json(users));
    // res.send({"message":"Data Received!",Data:req.body}),next();
    }
    
    else if(req.body.ac_no==''||req.body.branch_name==''||req.body.primarycxlatlong=='') {console.log("Invalid Data");res.sendStatus(401).res('Invalid Data')}

    else{
        res.sendStatus(401).res('Invalid Data');
    }
}


exports.getAllBranches=(req,res)=>{
        getbranches.findAll().then(users => {
            console.log(users);
            res.send(users);
        });
}

exports.getBranches=(req,res)=>{
    getbranches_Sp.findAll().then(users => {
        console.log(users);
        res.send(users);
    });
}


exports.poleapp_portal_stats=(req,res)=>{
    single_port_status.findAll().then(users => {
        console.log(users);
        res.send(users);
    });
}



exports.getpoleappSingleportData = async(req, res)=>{

    console.log(req.params,56);
    let cd = req.params.sd;
    let d1 =  cd.slice(0,10);
    let d2 = cd.slice(10,20);

    let startDate = new Date(d1);
     let endDate = new Date(d2);

    console.log('val of d1: '+d1 + typeof(d1));
    console.log('val of d2: '+d2 + typeof(d2));


    console.log('val of SD: '+startDate + typeof(startDate));
    console.log('val of ED: '+endDate + typeof(endDate));

        single_port.findAll({

        where:{
            'createdAt': {
                [seq.Op.between]:[startDate , endDate]
            }
        }
     }).then(data => {
          console.log("data:"+data);
          // console.log('startDate from BEez: '+startd);
          // console.log('endDate from BEez: '+endd);
          console.log(data,91);
          res.send(
              data              
          );
       
        }).catch(err => {
          res.status(500).send({
              message:
                  err.message || "Please Enter a Valid Range"
                  
          });
        });
}


