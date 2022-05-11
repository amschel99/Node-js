//in this section we are going to read a file and edit it
import {readFile,writeFile} from 'fs/promises'
let template= await readFile(new URL('./index.html', import.meta.url),'utf-8')
//basically new URL() takes in the path of the file we want to read as first argument and import.meta.url which is the base module we want to read into
const data= {
Title:"ATOMIC HABITS",
Body:"goals are to win the game but systems are to keep playing the game"
}
for(const[key,value] of Object.entries(data)){

template= template.replace(`{${key}}`,value)

}
console.log(template)

//replace() STRING METHOD
//replace is a function applied to strings it takes 2 arguments. the first s the substring you want to replace
//the second one is the new substring .replace doesn't alter the old string but returns a new string

//Object.entries(object) takes in an object. the syntax is
//for(const[key, value] of Object.entries(object){//do sth with the keys and values}
// key is all the keys in our object and value is all values of all the keys in that object)

await writeFile(new URL("./index.html",import.meta.url),template)