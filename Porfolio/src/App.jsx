import React from 'react'
import './Layouts/Homepage.jsx'
import Homepage from './Layouts/Homepage.jsx'
import Navbar from './Layouts/Navbar.jsx'
import Whoiam from './Layouts/Whoiam.jsx'

function App() {
  return (
    <main className='main'>
      <Navbar/>
      <Homepage/>
      <Whoiam/>
    </main>
  )
}

export default App
