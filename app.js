
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
const start= async ()=> {
    try{
  const first= await getFile("./codes/hello.pdf")
    console.log(first)
    }
    catch(err){
console.log(error)
    }
  
}
start()
