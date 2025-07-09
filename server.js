const express = require('express');
//  Hadi katdir import dyal library Express
// express hwa framework dyal Node.js katkhlli tsayb APIs / backend b simplicité
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
