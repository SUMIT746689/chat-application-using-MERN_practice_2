//external middleware
const multer = require('multer');
const path = require('path');
const createError = require('http-errors'); 

function singleUpload (
    subFile_path,
    max_file_size,
    support_file_extensions,
    error_message
){
    //file upload path 
    const uploadPath = path.join(__dirname,'../public/uploads',subFile_path);
    
    //create a custom avatar upload path
    const storage = multer.diskStorage({
        destination : function (req,file,cb){
            
            cb(null,uploadPath);
        },
        filename : function (req,file,cb){
            const fileExt = path.extname(file.originalname);
            const fileFirstPath = file.originalname
                .replace(fileExt,'')
                .split(' ')
                .join('-')+'-'+Date.now();

            const fullpath = fileFirstPath + fileExt;
            
            cb(null,fullpath);
        }

    })

    const upload = multer({
        storage : storage,
        limits : {
            fileSize : max_file_size
        },
        fileFilter : function (req,file,cb){
            if(support_file_extensions.includes(file.mimetype)){
                cb(null,true)
            }
            else{
                cb(createError(error_message))
            }
        }

    });

    return upload ; 
}

module.exports = singleUpload ;