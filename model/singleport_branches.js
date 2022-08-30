const db=require('../dbconnection');
const sequelize=require('sequelize');

const getBranchesSP=db.define('poleapp_singleport_branches',{
    branchId: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      branchName: sequelize.STRING,
      branchCode: sequelize.STRING,
});

module.exports=getBranchesSP;