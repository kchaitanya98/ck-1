const db=require('../dbconnection');
const sequelize=require('sequelize');

const getBranches=db.define('poleapp_branches',{
    branchId: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      branchName: sequelize.STRING,
      branchCode: sequelize.STRING,
});

module.exports=getBranches;