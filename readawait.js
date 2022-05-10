const {readFile}= require("fs")
const getFile= (path)=>{

return new Promise((resolve, reject)=>{
    readFile(path,"utf-8", (err, data)=>{
        if(err){
            reject(err)
        }
        else{
            resolve(data)
        }
    })
})


}
const start= async ()=>{
    const first= await getFile("./codes/hello.pdf")
    console.log(first)
}
start()