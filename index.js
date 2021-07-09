require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./routes/index.routes.js')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('PORT', process.env.PORT || 5000)
app.use(router)

app.listen(app.get('PORT'), () => {
  console.log('Server init on PORT', app.get('PORT'))
})
