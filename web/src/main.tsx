import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AdsDetails from './pages/AdsDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/ads/:id' element={<AdsDetails />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
