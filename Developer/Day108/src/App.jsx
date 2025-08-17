import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)
  // const [first, setFirst] = useState(0)

  // Case 1 :Run on every render
  useEffect(()=>{
    alert("Hey I will run on every render")
  })

  // Case 2 : Run only on first render

  useEffect(() => {
    alert("Hey welcome to my page . This is the first render")
  

  }, [])

  // Case 3 : Run only when certain values change

   useEffect(() => {
    alert("Hey I am running because color was changed")
  

  }, [color])


  useEffect(() => {
    alert("Count was changed")
    setColor(color+1)
  

  }, [count])
  

  useEffect(() => {
    alert("First was changed")
  

  }, [])

  // Example of Cleanup function

  useEffect(() => {
    alert("First was changed")

    return()=>{
      alert("Component was unmounted")
    }
  

  }, [])

  return (
    <>
    <Navbar color={"cyan"+ "blue"}/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
