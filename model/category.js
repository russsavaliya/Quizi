const mongoose= require('mongoose')
let schema= mongoose.Schema

let que= new schema({
   name:String
})

let catedatabase=mongoose.model('category',que)

module.exports=catedatabase