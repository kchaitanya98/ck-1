const exp=require('express');
const app=exp.Router()||exp();

const login = require('../control/login');
const checkAuth = require('../middleware/check-auth');

app.get('/UserLogin',login.logIN);
module.exports=app