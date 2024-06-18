const express = require('express');

const app = express();
const port = process.argv[3] || 3000;

app.get('/api', (req, res) => {
  res.json({ "msg": "Hello world" });
});

app.listen(port, () => {
  console.log(`Listening nodes on http://localhost:${port}`);
})

