var https = require("https");
var fs = require("fs");

var result = fs.createWriteStream("img.jpg");

var request = https.request("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", function(res){
    let completeData="";
    res.on("data",function(chunk){
      completeData+=chunk;
    })
    res.on("end",function(){
        var parseData = JSON.parse(completeData);
        var url = parseData.url;
        var imgReq = https.request(url, function (res) {
            res.pipe(result);
        })
        imgReq.end();
    })
});
request.end();