var express = require("express");
var os = require("os");
var interfaces = os.networkInterfaces();

var app = express();
var port = process.env.PORT || 8080;

app.get('/',function(req,res){
    var regex = /\((.*?)\)/;
    var userAgent = req.headers["user-agent"];
    
    res.send({ipaddress:req.headers["x-forwarded-for"],language:req.headers["accept-language"].split(',')[0],software:regex.exec(userAgent)[1]});
    
});

app.listen(port,function(){
 console.log("something is happening at https://learn-something-new-chayakrishnaprasad.c9users.io/ ");
});
