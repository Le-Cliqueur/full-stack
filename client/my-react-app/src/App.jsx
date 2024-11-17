import { useEffect, useState } from 'react'
import axios from "axios"

function App() {
  const [count, setCount] = useState(0)
  const [books, setBooks] = useState([])


  
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



  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>click</button>
      </div>
      <h1>BOOK STORE</h1>
      <div>
        <input type="text" placeholder='Name of the book'/>
        <input type="text" placeholder='Date of release'/>
        <input type="text" placeholder='Author'/>
        <button onClick={() => console.log(books)}>submit</button>
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
