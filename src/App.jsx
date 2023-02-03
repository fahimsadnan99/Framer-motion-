import React from 'react'
import Navbar from "./Leyars/Navbar"

import { Outlet } from 'react-router-dom'

const App = () => {
  return (
  <>
  <Navbar></Navbar>
<Outlet></Outlet>

</> 
  )
}

export default App