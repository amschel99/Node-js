//when your program exits with 1, It means there was an error
//error handling is very important so that our app doesn't break, this how we do it if we using fs/promises
import {readFile} from 'fs/promises'

try{
    
const result = await readFile(new URL("./module.mjs", import.meta.url),"utf-8")
}
catch (e){
console.error(e)
}
console.log("our error didn't break our code")