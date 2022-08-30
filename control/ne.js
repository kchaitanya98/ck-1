const getClusterbyBranch = require("../model/getBranch_clusters");
const nesubmittedData = require("../model/nedata_submit");
const getbranches=require('../model/getBranches');




exports.getAllBranches=(req,res)=>{
    getbranches.findAll().then(users => {
        console.log(users);
        res.send(users);
    });
}

exports.getCluters = (req, res, err) => {
    console.log("ROUTING API WORKS");
    console.log(req.query.cluster);
    // res.json({message:"ROUTE API WORKS !"});
    getClusterbyBranch.findAll({ where: { 'branch_code': req.query.cluster } }).then(function (article) {
        // console.log(article);
        if (article.length > 0) {
            res.json([{ "message": "success", data: article }]);
        }
        if (article.length <= 0) {
            res.send([{ "message": "success", data: "No Data Exists" }]);
        }
    })
    //res.send("<h4 style='color:green;text-align:center;font-family: sans-serif'>"+'Welcome To Backend!, Controller Api works!'+"</h4>");
}


exports.SubmitData = (req, res) => {
    console.log(req.body,req.file);

    if (req.body.branch_name == '' || req.body[`lat_long`] == '' || req.body.ftdupdate == '') {
        res.json("Validations Failed !");
    }
    else {
        
        nesubmittedData.create(req.body).then(users => res.json(users));
    }
    // res.send({"message":"Data Received!",Data:req.body}),next();
}



exports.GetNE_Data = (req, res) => {
    var request=req.query
    console.log(request,36);

    if (req.query) {
        nesubmittedData.findAll({ where: { 'branch_name':request.branch_name, 'cluster_name':request.cluster_name } }).then(users => {
            console.log(users);
            res.send(users);
        });
    }

    else res.json("unknown Error !")
}