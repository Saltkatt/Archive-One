import { FaTimes } from 'react-icons/fa'

const Book = ({ book, onDelete }) => {
    return (
        <div className='book'>
            <h3>{book.title} by {book.author}
            <FaTimes 
            style={{ color: 'red', cursor: 'pointer'}}
            onClick={() => onDelete(book.id)}
            />
            </h3>
            <h4>{book.genre}</h4>
            <p>{book.description}</p>
            <p>{book.language}</p>
            
        </div>
    )
}

export default Book
