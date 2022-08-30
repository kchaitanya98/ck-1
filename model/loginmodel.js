const db=require('../dbconnection');
const sequelize=require('sequelize');

const loginUsersModel = db.define('poleapp_users', {
        userId: {type:sequelize.INTEGER,primaryKey: true},
        password: sequelize.STRING,
        enabled: sequelize.INTEGER,
        designation: sequelize.STRING,
        username: sequelize.STRING
})

module.exports=loginUsersModel;