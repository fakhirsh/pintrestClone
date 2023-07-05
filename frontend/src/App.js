import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Login from './containers/Login'
import Home from './containers/Home'
import { CreatePin } from './components'

const App = () => {

  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/*' element={<Home />} />
    </Routes>
  )
}

export default App