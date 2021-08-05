const mongoose = require('mongoose')

;(async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .then(() => {
      console.log('database connect')
    })
    .catch((err) => {
      console.log(err)
    })
})()