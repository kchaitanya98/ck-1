
const {MongoClient}=require('mongodb');
//const uri = "mongodb://localhost:27017/mydb";
const uri="mongodb+srv://ckdb1:ckdb1@cluster0.wjxp1.mongodb.net/?retryWrites=true&w=majority"
const client=MongoClient.connect(uri,(err,db)=>{
	if(err) throw err;
	console.log('Mongo-Db connection success!');
	db.close();
});
//listDatabases(client);

module.exports=client;