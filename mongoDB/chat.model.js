const {Schema, model} = require('mongoose')

const chatSchema = new Schema({
  users: Array,
  messages: Array
})

module.exports = model('chats', chatSchema)
