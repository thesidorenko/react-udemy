import BookList from './components/BookList'
import BookCreate from './components/BookCreate'
import { useEffect } from 'react'
import useBooksContext from './hooks/useBooksContext'

function App() {
  const { fetchBooks } = useBooksContext()

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
