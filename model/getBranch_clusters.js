
const db=require('../dbconnection');
const sequelize=require('sequelize');

const getBranch_clusters=db.define('poleapp_branchclusters',{
    Id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      branch_code: sequelize.STRING,
      name: sequelize.STRING
});

module.exports=getBranch_clusters;
