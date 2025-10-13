import React from 'react'
import Navbar from './components/Navbar/navbar'
import Form from './components/Form'

const App = () =>{
  return( /* have to use ( because it returns jsx/html)*/
    <div className = 'container'>

      <Form/>
      <Navbar/>
      
    </div>
  )
}
export default App