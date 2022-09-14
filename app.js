const bodyParser = require('body-parser')
const express = require('express')

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
const { PORT } = process.env

const app = express()

const adminRoutes = require('./routes/admin')
const commonRoutes = require('./routes/common')
const productsRoutes = require('./routes/products')
// Template engines
app.set('view engine', 'ejs');
app.set('views', 'views')

// Static folder
app.use(express.static('public'))

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
app.use(adminRoutes)
app.use(productsRoutes)
app.use(commonRoutes)
app.use((req, res) => res.status(404).render('404'))

app.listen(process.env.PORT, () => console.log(`Server is running on port http://localhost:${PORT} 🚀`))