const client = require('./client')
const express = require('express')
const index = express()
const port = 3001

index.get('/', (req, res) => {
  client.getAll(null, (err, data) => {
    if (!err) {
      res.status(200).json({
        message: 'hello world',
        customers: data.customers,
      });
    }
  });

});

index.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
