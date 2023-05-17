import { useState } from "react"
import BookEdit from "./BookEdit"

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false)

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false)
    onEdit(id, newTitle)
  }

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}/200`} alt={book.title} />
      {
        showEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : <h3>{book.title}</h3>
      }
      <div className='actions'>
        <button className='edit' onClick={() => setShowEdit(!showEdit)}>edit</button>
        <button className='delete' onClick={() => onDelete(book.id)}>x</button>
      </div>
    </div>
  )
}

export default BookShow