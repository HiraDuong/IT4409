const app = require("express")
const http = require("http").Server(app)
const io = require("socket.io")(http)

const{faker} = require("@faker-js/faker")


const port = 3000

app.get("/",(_req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

io.on("connection",(socket)=>{
    //
})

http.listen(port,()=>{
    console.log('Server running at http://localhost:${port}/')
    
})