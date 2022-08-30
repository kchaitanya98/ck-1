const db=require('../dbconnection');
const sequelize=require('sequelize');

const single_port_submitdata = db.define('poleapp_single_ports', {
        id: {
          type: sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        userId: sequelize.STRING,
        userName: sequelize.STRING,
        ac_no: sequelize.STRING,
        branch_name: sequelize.STRING,
        primarycxip: sequelize.STRING,
        primarycxlatlong: sequelize.STRING,
        neighbourcxip: sequelize.STRING,
        neighbourCxData:sequelize.JSON, //first keep sequelize.json then change to [sequelize.JSON] trick works
        //neighbourcxlatlong: sequelize.STRING,
        cxmacid: sequelize.STRING,
        battery_status: sequelize.STRING,
        final_update:sequelize.STRING,
        //status:sequelize.STRING,
        createdAt:{
          allowNull: true,
          type: sequelize.DATE,
          //defaultValue: sequelize.fn('NOW')
          // DATE_FORMAT(NOW(),'%Y-%m-%d')
      },
});



module.exports=single_port_submitdata;



