import { useState } from 'react'
import BookList from './components/BookList'
import BookCreate from './components/BookCreate'

function App() {
  const [books, setBooks] = useState([])

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 100),
        title
      }
    ]
    console.log(updatedBooks);
    setBooks(updatedBooks)
  }

  const deleteBookById = (id) => {
    const updatedBooks = books.filter(book => {
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return {
          ...book,
          title: newTitle
        }
      }
      return book
    })
    setBooks(updatedBooks)
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  );
}

export default App;
