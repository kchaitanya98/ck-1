
const db=require('../dbconnection');
const sequelize=require('sequelize');

const singleport_portal_status=db.define('poleapp_portal_stats',{
    statusId: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      status: sequelize.STRING,
});

module.exports=singleport_portal_status;
