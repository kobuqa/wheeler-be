const bodyParser = require('body-parser');
const express = require('express')

require('dotenv').config()
const { PORT } = process.env;

const app = express();

app.use(bodyParser)

app.get('/', (req, res) => {
    res.send('<h1>Hello from our app</h1>')
});


app.listen(process.env.PORT, () => console.log(`Server is running on port http://localhost:${PORT} 🚀`))