
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
import LoginNew from './page/Login/LoginNew'
import { useAppStore } from './lib/store'
import { useEffect } from 'react'
import ProfileNav from './components/nav/ProfileNav'

function App() {
  const {initializeAuth, authenticated } = useAppStore();
  const [sidebar, setSideBar] = useState(true)
  const [profileNavVisible, setProfileNavVisible] = useState(false);
  useEffect(()=>{
    initializeAuth()
    // authenticated()
  },[])

  // const closeProfileNav = ()=>{
  //   setProfileNavVisible(!profileNavVisible)
  // }
  const toggleProfileNav = () => {
    setProfileNavVisible((prev) => !prev);
    console.log(profileNavVisible)
  };

  return (
    <div>
      <Nav setSideBar={setSideBar}  toggleProfileNav={toggleProfileNav} />
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
         <Route path="/newlogin" element={<LoginNew />} />
       </Routes>
      </div>
       <ProfileNav isVisible={profileNavVisible} onclose={toggleProfileNav} />

    </div>
    </div>
  )
}

export default App
