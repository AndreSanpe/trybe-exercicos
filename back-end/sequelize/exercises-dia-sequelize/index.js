const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const BooksController = require('./src/controller/BooksController');

app.get('/books', BooksController.getAll);
app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));