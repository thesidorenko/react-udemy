import { useState } from "react"
import useBooksContext from '../hooks/useBooksContext'

function BookCreate() {
  const [title, setTitle] = useState('')
  const { createBook } = useBooksContext()

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createBook(title)
    setTitle('')
  }

  return (
    <div className='book-create'>
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className='input' onChange={handleChange} value={title} />
        <button className='button'>Create</button>
      </form>
    </div>
  );
}

export default BookCreate;