const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

app.get('/non-blocking', (req, res) => {
  res.status(200).send('Non-blocking response');
});

app.get('/blocking', (req, res) => {
  let counter = 0;
  for (let i = 0; i < 20_000_000_000; i++) {
    counter += i;
  }
  res.status(200).send(`Blocking response: ${counter}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
