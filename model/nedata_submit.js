

const db=require('../dbconnection');
const sequelize=require('sequelize');

const ne_submitdata = db.define('poleapp_ne_saved_data', {
        id: {
          type: sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        employeeId:sequelize.STRING,
        branch_name: sequelize.STRING,
        cluster_name: sequelize.STRING,
        overallclusterupdate:sequelize.STRING,
        "scope_kms":sequelize.STRING,
        "completed_kms": sequelize.STRING,
        "pending_kms": sequelize.STRING,
        "noofpolesrehab": sequelize.STRING,
        noofkmsfiberrecovered:sequelize.STRING,
        overallclusterupdate_act:sequelize.STRING,
        "overallclusterupdate_otheroperators": sequelize.STRING,
        "ftdupdate_kms": sequelize.STRING,
        "noofpolescleaned_kms": sequelize.STRING,
        "lat&long": sequelize.STRING,
        "lat": sequelize.STRING,
        "long": sequelize.STRING,
        "polebefore":sequelize.JSON, //first sequelize.json then change to [sequelize.json] array string whatever its a workaround
        "poleafter": sequelize.JSON,
        fiberbunchingbefore: sequelize.STRING,
        "noofmtscleaned_mts": sequelize.STRING,
        "fiberrecovered_mts": sequelize.STRING,
        ftdupdate_act:sequelize.STRING,
        "ftdupdate_otheroperators": sequelize.STRING,
        "remarks": sequelize.STRING,
        status:{
          type: sequelize.STRING,
          required: true,
          defaultValue:'0'
        },
},{ freezeTableName: true });



module.exports=ne_submitdata;