const {Schema,model,Types} = require('mongoose')


 const schema = new Schema({
     email:{type: String, required: true, unique: true },
     password:{type:String, required: true },
      links:[{ types: Types.ObjectId, ref: 'link' }]
 })
module.exports = madel ('user', schema)
