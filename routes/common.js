const express = require('express')

const commonController = require('../controllers/common')

const router = express.Router()

router.get('/', commonController.getIndex);

module.exports = router