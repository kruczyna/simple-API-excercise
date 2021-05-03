const express = require('express')
const router = express.Router()
const Cookie = require('../models/models')
const cookieController = require('../controllers/cookieController')

router.get('/:id', cookieController.cookie_get_one)
router.delete('/:id', cookieController.cookie_delete_one)

module.exports = router;
