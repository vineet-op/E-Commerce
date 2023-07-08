import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Home from './scenes/home/Home';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.screenTop(0, 0)
  }, [pathname])

  return null;
}

function App() {

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
