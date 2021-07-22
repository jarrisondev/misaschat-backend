require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('PORT', process.env.PORT || 5000)

const server = app.listen(app.get('PORT'), () => {
  console.log('Server init on PORT', app.get('PORT'))
})

const io = require('socket.io')(server,{
  cors:{
    origin: process.env.SOCKET_CLIENT_URL,
    methods:["POST, GET"]
  }
})

io.on('connection', (socket)=>{
  console.log('new connection')
  socket.on('60ee46c949cde3054cc0523a', (data)=> console.log(data))
})
