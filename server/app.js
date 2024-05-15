const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const {imageResize} = require('./imageFuncs.js');


const PORT = process.env.PORT || 4000;

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'./uploads');
    },
    filename: (req,file,cb) => {
        cb(null,file.originalname)
    }
})
const upload = multer({storage});
const app = express();

app.use(express.static(path.join(__dirname,'build')));
app.use(express.json({limit:'1mb'}));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'build','index.html'));
})

app.get('/api/test',(req,res) => {
    console.log(req)
    res.send('OK')
})
app.post('/imageupload',upload.single('imageFile'),(req,res) => {    
    console.log('file saved.');
    res.status(200).json({message: 'H'})    
})

app.post('/api/imageupload',upload.single('imageFile'),(req,res) => {    
    console.log('file saved.');
    res.status(200).json({message: 'A'})    
})

app.post('/api/newsize',(req,res) => {    
    console.log(req.body)
    console.log(`new size recieved: ${req.body.imageName} ${req.body.newSizeX} ${req.body.newSizeY}`);
    result = imageResize(req.body);
    console.log('result')
    console.log(result)
    if (result !== 'Failed') {
        console.log('Image resized successfully.')
        res.json({resultFileName: result})
} else {
        console.log('Image resized failed.')
        res.status(500).json({message: 'failed'})
    }
})

app.get('/api/downloadResult',(req,res) => {
    const fileName= req.query.filename;
    //res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    console.log(req.query)
    console.log(path.join(__dirname,'results',fileName))
    res.download(path.join(__dirname,'results',fileName),(err) => {
        if (err) {
            console.log('AN Error occured while downloading')
            console.log(err)
        } else {
            console.log('downoladed.')
        }
    });

})



app.listen(PORT,() => {
    console.log(`Server is Listening on port ${PORT}`)
})
