const exp=require('express');
const body=require('body-parser');
const cors=require('cors');
// const sequelize=require('sequelize');
// const port=process.env.PORT || 8080;
const port=8080;
//const checkAuth = require('../middleware/check-auth');
const path = require('path');
const app=exp();

var corsOptions = {
    // origin: ["http://localhost:4200"," http://192.168.0.8:8081"],
    origin: [],
  };

app.use(cors());
app.use(exp.json({ limit: '50mb' }));
// app.use(body.urlencoded(true,{}));
// app.use(body.urlencoded({ limit: '50mb', extended: false }));
// app.use(body.json({ limit: '50mb' }));

// parse requests of content-type - application/json
// app.use(body.json());

// parse requests of content-type - application/x-www-form-urlencoded

// app.use(body.urlencoded({ extended: true }));
app.use(body.urlencoded({ limit: '50mb', extended: true }));
app.use(body.json({ limit: '50mb' }));

app.listen(port,()=>{
    console.log('server listens on port '+ port)
});

app.use(exp.static('dist/cleanup'));
//app.use('/', exp.static(path.join(__dirname, '/dist/cleanup/index.html')));

app.get('/',(req,res)=>{
    // app.use(exp.static('/dist/cleanup'));
    res.sendFile('index.html',{root:__dirname})
    //res.sendFile(__dirname + "/dist/cleanup/index.html");
    //res.send("<div style='text-align:center;border:solid;width:fit-content;height:fit-content;color:blue;padding-top:0px'><h4 style='color:red;text-align:center;font-family: sans-serif'>"+'SITE UNDER CONSTRUCTION !'+"</h4></div>");
    //res.send("<h4 style='color:red;text-align:center;font-family: sans-serif'>"+'Welcome To Backend!, Api works!'+"</h4>");
})



const checkAuth = require('./middleware/check-auth');

const logIn=require('./routes/loginroute')
app.use('/route/LogIn',logIn);

const SProutes=require('./routes/singleportroutes');
app.use('/route/SProute',checkAuth,SProutes);

const NEroutes=require('./routes/neroutes');
app.use('/route/NEroute',checkAuth,NEroutes);

const uploadDocs=require('./routes/uploadDox');
app.use('/route/uploadDocx',checkAuth,uploadDocs);
