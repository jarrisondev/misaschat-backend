const router = require('express').Router()

router.get('/api/getContacts', (req, res) => {
  console.log(req.body)

  res.status(200).json({})
})

module.exports = router
