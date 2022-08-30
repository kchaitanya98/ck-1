// Include Sequelize module
const Sequelize = require('sequelize');
require('dotenv').config();

// Creating new Object of Sequelize
const connection = new Sequelize(
	process.env.DB_Name,
	process.env.DB_User,
	process.env.DB_Pass, {

		// Explicitly specifying
		// mysql database
		dialect: 'mysql',
        define: {
            timestamps: false
        },
		// By default host is 'localhost'		
		host: process.env.DB_Host
	},
    
);

connection.authenticate()
.then(() => {
  console.log('Connection has been established successfully.', 'DB - ',process.env.DB_Name);
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});


// Exporting the sequelize object.
// We can use it in another file
// for creating models

// define article model
// const Article = connection.define("login_users", {
//     username: Sequelize.STRING,
//     phone: Sequelize.INTEGER,
//     email:Sequelize.STRING,
//     password:Sequelize.STRING
// });

// Article.findOne({id:1},{limit:1}).then(function (article) {
//     console.log(article);
// })

// const singleportModel=require('./model/singleportmodel');
// const single_port = singleportModel(connection, Sequelize);

connection.sync();

module.exports = connection;



// var Sequelize = require('sequelize');

// module.exports = {
// 	sequelize: new Sequelize(env.DB, Config.DBUSERNAME, Config.DBPASSWORD, {
// 		dialect: 'mysql', host: Config.DBHOST, logging: true, dialectOptions: {
// 			options: {
// 				useUTC: false,
// 				dateFirst: 1,
// 			}
// 		}
// 	})
// }


