import { useState, useEffect } from 'react'
import Header from './components/Header'
import Books from './components/Books'
import AddBook from './components/AddBook'
import Sidebar from './components/Sidebar'
import SearchField from './components/SearchField'

function App() {
  const [showAddBook, setShowAddBook] = useState(false)
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      const booksFromServer = await fetchBooks()
      setBooks(booksFromServer)
    }

    getBooks()
  }, [])

  // Fetch Books
  const fetchBooks = async () => {
    const res = await fetch("http://localhost:8080/archive/books")
    const data = await res.json()

    console.log(data)
    return data
  }

  // Search 


  const findByAuthor = async (searchQueries) => {
    const search = JSON.stringify(searchQueries)
    console.log("Author: ", searchQueries.author)
    
    const res = await fetch(`http://localhost:8080/archive/books/?author=${searchQueries.author}`, {
      method: 'GET',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      
    })
    const data = await res.json()
    console.log("Search data: ", data)

    return data
  }

  //Fetch Book
  const fetchBook = async (id) => {
    const res = await fetch(`http://localhost:8080/archive/books/${id}`)
    const data = await res.json()

    console.log(data)
    return data
  }

  // Add Book
const addBook = async (book) => {
  //const id = Math.floor(Math.random() * 10000) + 1
  const res = await fetch("http://localhost:8080/archive/books", {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(book)

  })

  const data = await res.json()
  //const newBook = {id, ...book}
  setBooks([...books, data])
}

  // Delete Book
  const deleteBook = async (id) => {
    await fetch(`http://localhost:8080/archive/books/${id}`,
    {
      method: 'DELETE',
    })
    //console.log('delete', id)
    setBooks(books.filter((book) => book.id !== id ))
  }

  return (
    <div className="grid-container">
      <div className="item1">
      <Header onAdd={() => setShowAddBook(!showAddBook)} showAdd={showAddBook}/>
      
      {showAddBook && <AddBook onAdd={addBook}/>}
      <SearchField onSearch={findByAuthor}/>

      </div>
      <div className="item2">
        <Sidebar/>
      </div>
      <div className="item3">
          <div className="container">
     
            { books.length > 0 ? (<Books books={books}
            onDelete={deleteBook} 
            />) : ('No Books To Show')}
     
          </div>
      </div>
      <div className="item4"></div>
      <div className="item5"></div>

    
    </div>
  );
}

export default App;
