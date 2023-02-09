const mongoose= require('mongoose')
let schema= mongoose.Schema

let que= new schema({
    que:String,
    ans:String,
    opt:[String],
    category:String,
})

let quedatabase=mongoose.model('question',que)

module.exports=quedatabase