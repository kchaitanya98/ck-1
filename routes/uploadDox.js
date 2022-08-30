const express = require("express");
const app = express.Router();
const documentUploadController = require("../control/documentUploadController");
const checkAuth = require("../middleware/check-auth");
const multer = require('multer');
//const dateFormat = require('dateformat');

const datetime=new Date().toJSON().slice(0, 10).split`-`.join``;
//datetime.toJSON().slice(0, 10).split`-`.join``;
const body=require('body-parser');
const cors=require('cors');

app.use(cors());
app.use(express.json());

app.use(body.urlencoded({ limit: '50mb', extended: false }));
app.use(body.json({ limit: '50mb' }));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploaded-files')
    },
    filename: (req, file, cb) => {
        if(file.mimetype === 'image/gif' || file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'application/pdf') {
        cb(null, `poleapp-${datetime}-${file.originalname.split(' ').join('-')}`);
        }
      }
  })
  
const upload = multer({ storage: storage });

app.post("/uploaddocument", upload.single('file'), documentUploadController.UploadDocFile);
app.post('/getImg',documentUploadController.sendImages)

//app.post("/upload-rejected-document", upload.single('file'), checkAuth, documentUploadController.UploadRejectedDocFile);

module.exports = app;