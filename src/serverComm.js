

async function testServerConnection() {
    const url = '/api/test';
    const contentType = 'text/plain';
    console.log(`I will send a get request to ${url}`)
    const response = fetch(url);
    response.then(response => {
      //handle response            
      console.log(response);
    })
    .then(data => {
      //handle data
      console.log(data);
    })
    .catch(error => {
      //handle error
      console.log('eeerroor')
    });
}

async function uploadImage(fileName,imageType,imageData0) {
    const url = 'http://127.0.0.1:3000/api/imageupload';
    const contentType = `image/${imageType}`;
    const imageData = new FormData();
    imageData.append(fileName,imageData0);
    try {
        const response = await fetch(url,{
            method: 'POST',
            headers: {
                "Content-Type": contentType,            
            },
            body: imageData
        })
        console.log("Success: ",response)
    } catch (err) {
        console.log("Failed: ",err)
    }
}


module.exports = {uploadImage,testServerConnection}