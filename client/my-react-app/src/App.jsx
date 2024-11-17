import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

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
        <button>submit</button>
      </div>
    </>
  )
}

export default App
