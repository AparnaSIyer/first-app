const fs= require('fs')
const path= require('path')

//create folder

// fs.mkdir(path.join(__dirname,'/test'),{},err=>{
//     if(err) throw err;
//     console.log('Folder created .....')
// })

//Create and write to a file

// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World!',err=>{
//     if(err) throw err;
//     console.log('Written to .....')

//     fs.appendFile(path.join(__dirname,'/test','hello.txt'),'I love Node.js!',err=>{
//         if(err) throw err;
//         console.log('Written to.....')
//     })
// })

// fs.writeFile(path.join(__dirname,'url_demo.js'),'',err=>{
//     if(err) throw err;
//     console.log('Created file')
// })
// read file
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
        if(err) throw err;
        console.log(data)
    });

//rename operation as well