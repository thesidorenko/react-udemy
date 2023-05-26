import BookEdit from "./BookEdit"
import { useState } from "react"
import useBooksContext from "../hooks/useBooksContext"

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false)
  const { deleteBookById } = useBooksContext()

  const handleSubmit = () => {
    setShowEdit(false)
  }

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}/200`} alt={book.title} />
      {
        showEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : <h3>{book.title}</h3>
      }
      <div className='actions'>
        <button className='edit' onClick={() => setShowEdit(!showEdit)}>edit</button>
        <button className='delete' onClick={() => deleteBookById(book.id)}>x</button>
      </div>
    </div>
  )
}

export default BookShow