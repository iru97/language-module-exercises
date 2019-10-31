interface Book {
    title: string;
    isRead: boolean;
}

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true }
] as Book[];

const isBookRead = (books, title): boolean => {
    const book: Book = books.find((book: Book ) => book.title === title)
    return book ? book.isRead : false;
};

console.log(isBookRead(books,"Devastación"));// true
console.log(isBookRead(books,"Canción de hielo y fuego"));// false
console.log(isBookRead(books,"Los Pilares de la Tierra"));// false
