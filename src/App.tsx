import React from 'react'
import './App.css'
import HomePages from './Pages/HomePages'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <HomePages />
    </BrowserRouter>
  )
}

export default App
