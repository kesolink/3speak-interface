
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
// import Treanding from './page/Treanding'
import Nav from './components/nav/Nav'
import { useState } from 'react'
import Video from './page/Video'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'
import FirstUploads from './page/FirstUploads'
import Trend from './page/Trend'
import NewVideos from './page/NewVideos'
import UploadVideo from './page/UploadVideo'

function App() {
  const [sidebar, setSideBar] = useState(true)

  return (
    // <div>
    //   <Nav setSideBar={setSideBar} />
    //   <Routes>
    //     <Route path="/" element={<Home sidebar={sidebar} />} />
    //     <Route path="video/20/4521" element={<Video/>} />
    //   </Routes>
    // </div>

    <div>
      <Nav setSideBar={setSideBar} />
      <div>
      <Sidebar sidebar={sidebar}/>
      <div className={`container ${sidebar? "" : "large-container"}`}>
        <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="video/20/4521" element={<Video/>} />
        <Route path="/upload" element={<UploadVideo/>} />
        <Route path="/firstupload" element={<FirstUploads/>} />
        <Route path="/trend" element={<Trend/>} />
        <Route path="/new" element={<NewVideos/>} />
      </Routes>
      </div>
    </div>
    </div>
  )
}

export default App
