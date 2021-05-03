const express = require('express')
const router = express.Router()
const Cookie = require('../models/models')

router.get('/:id', (req, res) => {
  Cookie.findById(req.params.id)
    .then((result) => {
      res.render('details', { cookie: result })
    })
    .catch((error) => {
      console.log(error)
    })
})

router.delete('/:id', (req, res) => {
  Cookie.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({ redirect: '/all-cookies'})
    })
    .catch((error) => {
      console.log(error)
    })
})

module.exports = router;
