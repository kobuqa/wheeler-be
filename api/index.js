const bodyParser = require('body-parser');
const express = require('express')

require('dotenv').config()
const { PORT } = process.env;

const app = express();

app.use(bodyParser)


app.get('/api', (req, res) => {
    const path = `/api/item/${v4()}`;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
  });


// app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT} 🚀`))
module.exports = app;