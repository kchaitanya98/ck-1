const exp=require('express');
const app=exp.Router()||exp();


const ne = require('../control/ne');
const checkAuth = require('../middleware/check-auth');

// app.get('/get',ne.getData);
app.get('/getAllBranches',checkAuth,ne.getAllBranches);
app.get('/getClusters',checkAuth,ne.getCluters);
app.post('/ne_SubmitData',checkAuth,ne.SubmitData);
app.get('/GetNE_Data',checkAuth,ne.GetNE_Data);

module.exports=app