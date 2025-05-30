const http=require('http')
const fs=require('fs')
const path=require('path')
const url=require('url')

const PORT=3000
const dirPath=path.join(__dirname,'files')

if(!fs.existsSync(dirPath))fs.mkdirSync(dirPath)

http.createServer((req,res)=>{
  const parsedUrl=url.parse(req.url,true)
  const pathname=parsedUrl.pathname
  const query=parsedUrl.query
  const filePath=path.join(dirPath,query.filename||'')

  if(pathname==='/create'){
    fs.writeFile(filePath,query.content||'',err=>{
      if(err){
        res.writeHead(500)
        res.end('Error creating file')
      }else{
        res.writeHead(200)
        res.end('File created')
      }
    })
  }
  else if(pathname==='/read'){
    fs.readFile(filePath,'utf8',(err,data)=>{
      if(err){
        res.writeHead(404)
        res.end('File not found')
      }else{
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end(data)
      }
    })
  }
  else if(pathname==='/delete'){
    fs.unlink(filePath,err=>{
      if(err){
        res.writeHead(404)
        res.end('File not found')
      }else{
        res.writeHead(200)
        res.end('File deleted')
      }
    })
  }
  else{
    res.writeHead(404)
    res.end('Invalid route')
  }
}).listen(PORT,()=>console.log(`Server running on http://localhost:${PORT}`))
