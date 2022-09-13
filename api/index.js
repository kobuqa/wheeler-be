// const bodyParser = require('body-parser');
const express = require('express')

require('dotenv').config()
// const { PORT } = process.env;

const app = express();

// app.use(bodyParser)


app.get('/', (req, res) => {
res.send('hello world')
  });


// app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT} 🚀`))
module.exports = app;