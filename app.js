
//using promises to read files
const {readFile}=require("fs")
//create a function that returns a promise which we will resolve later
const getFile= (path)=>{

    return new Promise((resolve, reject)=>{
        readFile(path,"utf8",(err, data)=>{

            if(err){
                reject(err)
            }
            else{
                resolve(data)
                
            }
        })
    })
}
getFile("./codes/hello.txt").then((result)=>{console.log(result)})
