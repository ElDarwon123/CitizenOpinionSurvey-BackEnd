const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: ('certificados'),
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now());
    }
});



const uploadCer = multer({ storage: storage });

module.exports = uploadCer;
