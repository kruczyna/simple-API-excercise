const express = require('express')
const router = express.Router()
const Cookie = require('../models/models')
const cookieController = require('../controllers/cookieController')

router.get('/', (req, res) => {
  res.render('create')
})

router.post('/', cookieController.cookie_create_post)

module.exports = router;
