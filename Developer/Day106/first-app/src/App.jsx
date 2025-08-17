
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  

  return (
    <>
    <Navbar/>
    <Card title="card 1" description ="card 2 desc"/>
    <Card title="card 2" description ="card 2 desc"/>
    <Card title="card 3" description ="card 2 desc"/>

    <Footer/>
    </>
  )
}

export default App
