import { useEffect, useState } from 'react'
import axios from "axios"

function App() {
  const [count, setCount] = useState(0)
  const [books, setBooks] = useState([])

  const [title, setTitle] = useState("")
  const [date, setDate] = useState(0)
  const [author, setAuthor] = useState("")

  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/books/');
      setBooks(response.data);
      console.log(response.data)
    } catch (err) {
      console.log("error");
    } 
  };
  
  useEffect(() => {
    fetchData();
  }, []);


  const addBook = async () => {
    const book = {
      title: title,
      date: date,
      author: author
    }

    try {
      console.log(book)
      const response = await axios.post("http://127.0.0.1:8000/api/books/create", book);
      console.log(response)
    } catch (err) {
      console.log(err.status)
    }
  }



  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>click</button>
      </div>
      <h1>BOOK STORE</h1>
      <div>
        <input type="text" placeholder='Name of the book' onChange={(e) => setTitle(e.target.value)}/>
        <input type="number" placeholder='Date of release' onChange={(e) => setDate(e.target.value)}/>
        <input type="text" placeholder='Author' onChange={(e) => setAuthor(e.target.value)}/>
        <button onClick={() => addBook()}>submit</button>
      </div>
      {books.map((book) => 
        <div>
          <h1>{book.title}</h1>
          <p>{book.date}</p>
          <p>{book.author}</p>
        </div>
      )}

    </>
  )
}

export default App
