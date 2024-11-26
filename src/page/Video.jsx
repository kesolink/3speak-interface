import React from 'react'
import "./Video.scss"
import PlayVideo from '../components/playVideo/PlayVideo'
import Recommended from '../components/recommended/Recommended'
function Video() {
  return (
    <div className='play-container'>
        <PlayVideo />
        <Recommended />
    </div>
  )
}

export default Video