import express from "express"

const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  res.json({ "msg": "Hello world with TS" });
});

app.listen(port, () => {
  console.log(`Listening nodes on http://localhost:${port}`);

})

