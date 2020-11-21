const http=require('http');
const path=require('path');
const fs=require('fs');
const { getMaxListeners } = require('process');

const server=http.createServer((req,res)=>{
//    if(req.url==='/'){
//        fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
//            if(err) throw err;
//            res.writeHead(200,{'Content-Type':'text/html'});
//            res.end(content)
//        })
//    }

//    if(req.url==='/api/users'){
//     const users=[
//         {name:'Aparna Iyer',age:25},
//         {name:'Ruchi Shah',age:24}
//     ];
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.end(JSON.stringify(users));
//     }
    //Build dyanamic file path
    let filepath=path.join(__dirname,'public',req.url === '/' ? 'index.html': req.url);

    // Extension of file
  let extname = path.extname(filepath);

  // Initial content type
  let contentType = "text/html";

  // Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Check if contentType is text/html but no .html file extension
  if (contentType == "text/html" && extname == "") filepath += ".html";

    fs.readFile(filepath,(err,content)=>{
        if(err) 
        {
            if(err.code == 'ENOENT')
            {
                //Page not found
                fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.end(content, 'utf8');
                });
            }
            else{
                res.writeHead(500);
                res.end(`Server error : ${err.code}`);

            }
        }
        else{
            //Successful response
            res.writeHead(200,{'Content-Type':contentType});
            res.end(content,'utf8')

        }

    });
});

const PORT=process.env.PORT || 5000;

server.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));

