const sharp = require('sharp');
const path = require('path');
const { Module } = require('module');


const imageResize = (imageDataPack) => {
    const fileName = imageDataPack.imageName;
    const newSizeX = imageDataPack.newSizeX;
    const newSizeY = imageDataPack.newSizeY;

    try {
        sharp(path.join(__dirname,'uploads',fileName))
            .resize(newSizeX,newSizeY)
            .toFile(path.join(__dirname,'results',`new_${fileName}`))
        return `new_${fileName}`;
    } catch (err) {
        console.error(`Something wrong happens during image resizing: ${err}`);
        return 'Failed';
    }
}


module.exports = {imageResize}