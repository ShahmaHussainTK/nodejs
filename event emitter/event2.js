const eventemitter=require("events")

const orderemitter=new eventemitter()

orderemitter.on('order_placed',(order)=>{
    console.log(`order received: ${order.id}`)
    console.log('sending confirmation to the email')
})

orderemitter.on('payment_done',(order)=>{
    console.log(`payment completed for the order:${order.id}`)
    })

    const order={
        id:1001,
        item:"mandhi"
    }

    orderemitter.emit("order_placed",order)
    orderemitter.emit("payment_done",order)