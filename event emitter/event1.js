const eventemitter=require("events")

const emitter=new eventemitter()
// used to listen event we use ON method and for listen we use LISTEN method
emitter.on("message",(msg)=>{
    console.log(`message received, ${msg}`)
})
emitter.emit(`message`,`i am shahma`)

emitter.emit(`message`,`iloveyou`)

