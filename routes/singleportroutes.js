const exp=require('express');
const app=exp.Router()||exp();
const body=require('body-parser');
const cors=require('cors');

const checkAuth = require("../middleware/check-auth");
const port=9000;

app.use(cors());
app.use(exp.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(body.urlencoded({ limit: '50mb', extended: false }));
app.use(body.json({ limit: '50mb' }));

// app.listen(port,()=>{
//   console.log('server listens on port '+ port)
// }); 


app.get('/',(req,res)=>{
  res.send("<h4 style='color:blue;text-align:center;font-family: sans-serif'>"+'Welcome To Backend!, Main Route Api works!'+"</h4>");
    console.log('MAIN RoWORKS');
})



/////////////////////////////////////
const singleport = require('../control/single_port');

app.post('/post',singleport.singleport_submit);

app.get('/get',singleport.getData);
app.get('/getBranches',singleport.getBranches);
app.get('/poleapp_portal_stats',singleport.poleapp_portal_stats);
app.get('/getpoleappSingleportData/:sd',singleport.getpoleappSingleportData);
module.exports=app;
