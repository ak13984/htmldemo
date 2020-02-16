const http= require("http");

const server=http.createServer(function(req,res){
    var url = req.url;
    if(url=="/"){
        res.write("<h1>Heyo</h1>");
    }else if(url=="/contacts"){
        res.write("<h1>Contacts Page</h1>")
    }else{
        res.write("<h1>Wrong page</h1>");
    }
});
server.listen(3000,function(){
    console.log("Server is listening at port 3000");
});