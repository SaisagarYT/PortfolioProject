import React from 'react'
import './Layouts/Homepage.jsx'
import Homepage from './Layouts/Homepage.jsx'
import Navbar from './Layouts/Navbar.jsx'
import Whoiam from './Layouts/Whoiam.jsx'
import WhatIDo from './Layouts/WhatIDo.jsx'
import Myskills from './Layouts/Myskills.jsx'

function App() {
  return (
    <main className='main'>
      <Navbar/>
      <Homepage/>
      <Whoiam/>
      <WhatIDo/>
      <Myskills/>
    </main>
  )
}

export default App
