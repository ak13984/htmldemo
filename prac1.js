function downloadFile(url, downloaded) {
console.log("Downloading file from: "+url);
var fileName = url.split("/").pop();
setTimeout(function(){
    downloaded(fileName)
},3000);
}


function compressFile(filePath, compressed) {
console.log("We are compressing: "+filePath);
var pathName = filePath.split(".").shift();
var finalName = pathName+"-resized"+filePath.split(".").pop();
setTimeout(function(){
    compressed(finalName)
},3000);
}


function uploadFile(diskPath, uploaded) {
    var uploadUrl = "http://pep/uploads";
}



downloadFile("http://google.com/logo.png", function downloaded(dFile) {
var path=`C:\\Downloads\\`;
var filePath=path+dFile;
console.log("File saved to: "+filePath);
compressFile(filePath,function compress(cFile){
console.log("File compressed to: "+cFile);
})
});


// url:http://google.com/logo.png
// output:
// Downloading file from: http://google.com/logo.png
// File saved to: C:\Downloads\logo.png
// We are compressing: C:\Downloads\logo.png
// File compressed to: C:\Downloads\logo-resized.png
// Uploading to: http://pep/uploads
// File successfully uploaded to: http://pep/uploads/logo-resized.png
// Task completed