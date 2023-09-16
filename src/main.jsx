import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Speech from './pages/speech.jsx'
import Audio from './pages/audio.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/speech' element={<Speech />}></Route>
          <Route path='/audio' element={<Audio />}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
