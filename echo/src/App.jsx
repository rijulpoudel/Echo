import React from 'react'
import Form from './components/Form'
import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing'
import './App.css'


const App = () =>{
  return( /* have to use ( because it returns jsx/html)*/
    <>
      <main>
        "Hello World"
        <Navbar/>
        <Landing/>
      </main>
    </>
  )
}
export default App