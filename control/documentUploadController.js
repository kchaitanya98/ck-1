const path = require("path");
const DocumentUPloadModel=require("../model/nedata_submit");

exports.UploadDocFile = (req, res, next) => {
    const file = req.file;
    console.log(file,5);
    if(file){

            DocumentUPloadModel.update({
                polebefore:file.filename
            },
                {where: {
                    branch_name:`KTP`
                }});
                
                res.json('Img uploaded sucessfully !')
        }
    }


    exports.viewDocFile = (req, res, next) => {
        const file = req.file;
        console.log(file,5);
        if(file){
    
                DocumentUPloadModel.findAll({
                    polebefore:file.filename
                },
                    {where: {
                        branch_name:`KTP`
                    }}).then(data=>{
                        res.json('Img uploaded sucessfully !');
                    });
                    
                    // res.json('Img uploaded sucessfully !')


            }
        }


        exports.sendImages=(req,res)=>{
            this.fetchingDocumentsView(req,res);
        }


        //view images
// exports.CheckingDocumentsFromTable = async (req, res) => {

//     let fileName = await req.body.fileName;
//     let prospect_id = req.body.prospectId;
//     let imageName;
//     //column value gst_no..
//     //where condition.... gst_no...

//     //if na comes... images is not available...// null need to check
//     console.log('file name....', fileName);
//     try {
//         await DocumentUPloadModel.findOne({ attributes: [fileName], where: { prospect_id: prospect_id }, raw: true })
//             .then(data => {
//                 if (data != "" || data != null || data != undefined) {
//                     console.log('config..*****..', data);
//                     var s = JSON.stringify(data);
//                     var imageName = s.split(':"').pop().trim().replace(/^"|"$/g, '').replace('"}', '');
//                     console.log('x ...' + imageName);

//                     // let imageName = x.match(/"([^"]+)"/)[1].replace(/^"|"$/g, '');
//                     // console.log('imageName ...' + imageName);
//                     if (imageName != 'NA') {
//                         console.log('final response...' + imageName);
//                         ///var publicDir = path.join(__dirname, '..', 'uploaded-files/' + imageName);
//                         return res.sendFile(imageName);
//                     }
//                     else {
//                         return res.send({
//                             errorcode: '0',
//                             message: 'Image is not available...'
//                         })
//                     }
//                 }

//                 else {
//                     return res.send({
//                         errorcode: '0',
//                         message: 'Image is not available...'
//                     })
//                 }
//             });
//     }
//     catch (err) {
//         console.log('err...', err);
//         return res.send({
//             errorcode: '0',
//             message: 'Image is not available...'
//         })
//     }
// }



exports.fetchingDocumentsView = async (req, res) => {
    //let imageName = 'eb-sales-gst_certificate-1238.pdf';
    console.log(req.body);
    let imageName = req.body.fileName;
    var publicDir = path.join(__dirname, '..', 'uploaded-files/' + imageName);
    res.sendFile(publicDir);

}