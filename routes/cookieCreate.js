const express = require('express')
const router = express.Router()
const Cookie = require('../models/models')

router.get('/', (req, res) => {
  res.render('create')
})


router.post('/', (req, res) => {
  const cookie = new Cookie(req.body)
  cookie.save()
    .then((result) => {
      console.log(result)
      res.redirect('/all-cookies')
    })
    .catch((error) => {
      console.log(error)
    })
})

module.exports = router;
