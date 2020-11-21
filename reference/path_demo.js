const path=require('path');

//base file name
console.log(path.basename(__filename))

//directory name
console.log(path.dirname(__filename))

//file extension
console.log(path.extname(__filename))

//create path object
console.log(path.parse(__filename))
console.log('ext:' + path.parse(__filename).ext)
console.log('name:' + path.parse(__filename).name)

//concatenate paths
console.log(path.join(__dirname,'test','hello.html'))