const express = require('express')
const path = require('path')

const rootDir = require('../util/path')

const router = express.Router()

router.get('/admin', (req, res) => {
    res.render('admin')
})
router.post('/send', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;