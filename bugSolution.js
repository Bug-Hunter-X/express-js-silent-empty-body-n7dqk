const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send('Error: Empty request body');
  }
  console.log(req.body);
  res.send('OK');
});
app.listen(3000, () => console.log('Server listening on port 3000'));