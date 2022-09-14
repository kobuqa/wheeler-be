const express = require('express')
const router = express.Router()


router.get('/catalog', (req, res) => {
    res.render('catalog')
});

router.get('/', (req, res) => {
    res.render('main')
});

module.exports = router