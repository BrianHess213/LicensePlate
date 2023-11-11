const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
      res.send('Hello from our server!')
})

app.listen(8080, () => {
      console.log('server listening on port 8080')
})
// Good tutorial to finish Barcode Generator for Orca Scan
//https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters