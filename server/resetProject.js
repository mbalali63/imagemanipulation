const fs = require('fs');
const path  = require('path');


fs.rmSync(path.join(__dirname,'build'),{recursive:true},err => {
    if (err) {
        console.error(`An error occured while removing build folder: ${err}`);
    } else {
        console.log('build folder was removed');
    }
});
fs.cpSync(path.resolve('./../imagemanipulation/build'),path.resolve('./build'),{recursive:true},err => {
    if (err) {
        console.error(`An error occured while copying the build folder ${err}`);
    } else {
        console.log('build folder copied.')
    }
});

const listOfFiles = fs.readdirSync('./uploads/');

listOfFiles.forEach( (file) => {
    fs.unlinkSync(path.join(__dirname,'uploads',file))
})