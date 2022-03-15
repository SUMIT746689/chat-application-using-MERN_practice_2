const multer = require('multer');
const path = require('path');


async function sendMessage (req,res,next) {
    const locations = path.join(__dirname,'../../public/uploads/chatAvatar')

    //chat Avatar paths and file name 
    const storage = multer.diskStorage({
        destination : function (req,file,cb){
            cb(null,locations);
        },
        filename : function (req,file,cb){
            const fileExt = path.extname(file.originalname);
            
            const filename = file.originalname
                .replace(fileExt,'')
                .split(' ')
                .join('-')+'-'+Date.now();

            cb(null,filename+fileExt);
        }
    })
    const upload = multer({
        storage : storage,
    })

    upload.any()(req,res,(err)=>{
        if(err){
            res.status(405).json({
                errors : {
                    avatar : {
                        msg : err.message
                    }
                }
            })
        }
        else{
            console.log("sucessful chatAvatar");
            next(); 
        }
    });
     
}

module.exports = sendMessage ;