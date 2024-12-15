
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Home from './page/Home'
// import Treanding from './page/Treanding'
import Nav from './components/nav/Nav'
import { useState } from 'react'
import Watch from './page/Watch'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'
import FirstUploads from './page/FirstUploads'
import Trend from './page/Trend'
import NewVideos from './page/NewVideos'
import UploadVideo from './page/UploadVideo'
import Login from './page/Login/Login'
import KeyChainLogin from './page/Login/keyChainLogin'

function App() {
  const [sidebar, setSideBar] = useState(true)

  return (
    <div>
      <Nav setSideBar={setSideBar} />
      <div>
      <Sidebar sidebar={sidebar}/>
      <div className={`container ${sidebar? "" : "large-container"}`}>
        <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/upload" element={<UploadVideo/>} />
        <Route path="/firstupload" element={<FirstUploads/>} />
        <Route path="/trend" element={<Trend/>} />
        <Route path="/new" element={<NewVideos/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/keychain" element={<KeyChainLogin />} />
      </Routes>
      </div>
    </div>
    </div>
  )
}

export default App
