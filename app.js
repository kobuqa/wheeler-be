const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
const { PORT } = process.env

const app = express()

const adminRoutes = require('./routes/admin')
const commonRoutes = require('./routes/common')
app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.static('public'))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(adminRoutes)
app.use(commonRoutes)
app.use((req, res) => {
    res.status(404).render('404')
})

app.listen(process.env.PORT, () => console.log(`Server is running on port http://localhost:${PORT} 🚀`))