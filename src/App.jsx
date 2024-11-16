
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './page/Dashboard'
import Treanding from './page/Treanding'

function App() {

  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<Treanding/>} />
      </Routes>
    </div>
  )
}

export default App
