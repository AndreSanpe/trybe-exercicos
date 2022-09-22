const BookService = require('../service/BooksService');

const getAll = async (req, res) => {
    const books = await BookService.getAllBooks(req.params.books);
    res.status(200).json(books);
};

module.exports = {
    getAll,
};