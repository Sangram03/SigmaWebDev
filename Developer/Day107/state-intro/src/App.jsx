// import { useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  let a =5;
  // not possible

  return (
    <>
      <div>This count is{a}</div>
      <button onClick={()=> {a = a+1}}>Update count</button>
    </>
  )
}

export default App
