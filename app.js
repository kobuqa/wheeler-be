const bodyParser = require('body-parser');
const express = require('express')

require('dotenv').config()
const { PORT } = process.env;

const app = express();

app.use(bodyParser)


app.use('/hey', (req, res, next) => {
    console.log('Middleware two!')
    res.send('<h1>Hello from hey!</h1>')
})

app.use('/', (req, res, next) => {
    console.log('Middleware two!')
    res.send('<h1>Hello from express!</h1>')
})


app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT} 🚀`))