import React from 'react'
import Form from './components/Form'
import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing'

const App = () =>{
  return( /* have to use ( because it returns jsx/html)*/
    <>
      <Navbar/>
      <Landing/>
    </>
  )
}
export default App