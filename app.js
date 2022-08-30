const index=require('./index');
const connection=require('./dbconnection');
//const checkAuth = require('./middleware/check-auth');

if(connection&&index){
    console.log('connection, index file valid');
}
