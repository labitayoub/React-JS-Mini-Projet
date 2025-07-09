const express = require('express');
//  Hadi katdir import dyal library Express
// express hwa framework dyal Node.js katkhlli tsayb APIs / backend b simplicité
// require('express') = katjib Express men node_modules

const app = express();
// Hna katsayb wa7ed "app" men Express

// Hadi instance dyal Express

// katwli app hya l'objet li ghadi ndawi bih (dir routes, middlewares...)

// Daba app b7al serveur li ghadi nbniw 3lih routes/API dyalna.

const PORT = process.env.PORT || 8000;
// Kat7dded chno howa port li ghadi ytsma3 lih server

// process.env.PORT = ila rak f production (ex: Render, Heroku...) hadchi kaykhdem

// 8000 = port par défaut (local)

// PORT hiya chi numéro (b7al bab) li server Express yb9a ytsana fih les requêtes.
app.get('/hello/:name', (req, res) => {
    res.send(`Hello ${req.params.name}!`);
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Katdir route GET f path /

// app.get(...) = katst3ml HTTP GET

// '/' = root dyal site (localhost:8000/)

// (req, res) = parameters dyal callback

// req = request (li jat men client)

// res = response (li ghadi nrdo lclient)

// res.send('Hello World!') = katsifti text simple lclient


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Katkhlli server Express ybda ytsana requests f dik PORT

// app.listen(PORT) = ytsana f port (8000)

// callback () => {...} katsayb message f console bach ta9der tchouf f terminal