const util = require('util')
const {readFile, witeFile, writeFile}=require("fs")
const readFilePromise= util.promisify(readFile)
const writeFilePromise= util.promisify(writeFile)


const start= async ()=>{
    try{
        const first= await readFilePromise("./codes/hello.pdf","utf8")

await writeFilePromise("./codes/index.html",`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>hey mofos</h1>
</body>
</html>` )
console.log(first)

    }
catch(err){
console.log(err)
}


}