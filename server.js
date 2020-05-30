const http = require('http');
const server = http.createServer((req,res)=>{

    if(req.url ==="/"){
       return  res.send("hello how are you")
    }

});

server.listen(3000,()=>{
    console.log('listering at 3000 port')
});

