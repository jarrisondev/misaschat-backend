const { Schema, model, models } = require('mongoose') 

const userSchema = new Schema({
  email: String,
  name: String,
  password: String
})

module.exports =  model('users', userSchema)
