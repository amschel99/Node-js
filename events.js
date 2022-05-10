//first we import the module from events. The imported module is a class
const EventEmmiter= require("events")
// since EventEmmiter is a class we have to create a new instance of the class. i.e an object

const EventInstance= new EventEmmiter()
//this objected created has 2 properties on, a function which listens for events, and emit a function which responds to events
//on takes in the event and a callback
EventInstance.on("sayhi",(name, years)=>{
    console.log(`hi there ${name} its been ${years} years`)
})

EventInstance.emit("sayhi", "john", 3)

//first argument of emit is the event to listen for, the other are the arguments passed down from the callback function in on

//server using event emmiters example
const serverWithEventEmmiter=()=>{
const http=require("http")
const server= http.createServer()
server.on("request", (req, res)=>{
    res.end("welcome")
})
server.listen(3000)

}
//serverWithEventEmmiter()