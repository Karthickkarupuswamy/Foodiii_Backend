const mongoose = require("mongoose")//

const menuItem  = new mongoose.Schema({
    name:{type:String},
    menu:[{

        item:{type:String,required:true},
        amount:{type:Number,required:true}
    },{

        item:{type:String,required:true},
        amount:{type:Number,required:true}
    },{

        item:{type:String,required:true},
        amount:{type:Number,required:true}
    },{

        item:{type:String,required:true},
        amount:{type:Number,required:true}
    }]
})

const menuitem = mongoose.model('menuItem', menuItem)
module.exports = menuitem



