const {Schema, model} = require('mongoose')

const chatSchema = new Schema({
  names: Array,
  users: Array,
  messages: Array
})

module.exports = model('chats', chatSchema)
