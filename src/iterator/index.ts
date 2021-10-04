import {Book} from "./book";


const bookList = [
    new Book('book1', 'Khalitov Adel'),
    new Book('book2', 'Khalitov Adel'),
    new Book('book3', 'Khalitov Adel'),
    new Book('book4', 'Khalitov Adel'),
    new Book('book5', 'Khalitov Adel'),
    new Book('book6', 'Khalitov Adel'),
    new Book('book7', 'Khalitov Adel'),
    new Book('book8', 'Khalitov Adel'),
    new Book('book9', 'Khalitov Adel'),
    new Book('book10', 'Khalitov Adel'),
]

const nameIterator = bookList.sort((a, b) => a.getName().localeCompare(b.getName()))[Symbol.iterator]();
const authorIterator = bookList.sort((a, b) => a.getAuthor().localeCompare(b.getAuthor()))[Symbol.iterator]();
const dateIterator = bookList.sort((a, b) => a.getCreateAt().toString().localeCompare(b.getCreateAt().toString()))[Symbol.iterator]();
