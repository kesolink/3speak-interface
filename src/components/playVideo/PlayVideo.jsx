import "./PlayVideo.scss"
import video_play from "../../assets/image/video.mkv"
import { FaEye} from 'react-icons/fa'
import kesolink from "../../assets/image/kesolink.JPG"
import { LuTimer } from 'react-icons/lu'
import { BiDislike, BiLike } from 'react-icons/bi'
import { GiTwoCoins } from 'react-icons/gi'
import { useState } from "react"
const PlayVideo = () => {
    const initialContent = `
    <h1>Welcome to My Blog!</h1>
    <p>
      Hi there! My name is Kesolink, and this is my corner of the internet where I share insights, stories, and tips about technology, web development, and life as a developer in Nigeria.
    </p>
    
    <h2>Why I Started This Blog</h2>
    <p>
      Over the years, I’ve learned so much from the amazing developer community, and this blog is my way of giving back. Here, you'll find tutorials, project ideas, and reflections that I hope will inspire and help you on your journey.
    </p>
    
    <blockquote>
      "Learning never exhausts the mind." – Leonardo da Vinci
    </blockquote>
  
    <h3>What You’ll Find Here</h3>
    <ul>
      <li><strong>Technical Tutorials</strong>: Guides on React, Node.js, and blockchain development.</li>
      <li><strong>Project Highlights</strong>: Stories from the projects I’ve built, like my blockchain and token apps.</li>
      <li><strong>Personal Growth</strong>: Tips on self-improvement, decision-making, and earning money online.</li>
    </ul>
    
    <p>
      Thanks for stopping by! Feel free to explore, leave comments, and connect with me. Let’s build, learn, and grow together!
    </p>
  `;

    const [content, setContent] = useState(initialContent);



  return (
    <div className='play-video'>
        <video src={video_play} controls autoPlay muted></video>
        <h3>Best video presentation i made for my boss</h3>
        <div className="play-video-info">
            <div className="wrap-left">
              <div className="wrap">
                <FaEye />
                <span>23</span>
              </div>
              <div className="wrap">
                <LuTimer />
                <span>2 days ago</span>
              </div>
          </div>
            <div className='wrap-right'>
                <span className='wrap'><BiLike className='icon' /><span>259</span></span>
                <span className='wrap'><BiDislike className='icon' /><span>14</span></span>
                <span className='wrap'><GiTwoCoins className='icon' /><span>$23.01</span></span>
                <span>Reply</span>
            </div>
        </div>
        <hr />
        <div className="big-mid-wrap"></div>
        <div className="publisher">
            <img src={kesolink} alt="" />
            <div>
                <p>GreatStack</p>
                <span>300 Followers</span>
            </div>
            <button>Follow </button>
        </div>

        <div className="description-wrap">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        </div>




        <div className="vid-comment-wrap">
            <h4>10 comment</h4>
            <div className="comment">
                <img src={kesolink} alt="" />
                <div>
                    <h3>Jack Nicholsonc <span>1 day ago</span></h3>
                    <p>I was given birth to in the 20th century so I didn't have the chance or the opportunity to listen to most of the great Bob marley songs</p>
                    <div className="comment-action">
                    <div className="wrap"><BiLike /> <span>244</span></div>
                    <div className="wrap"><BiDislike /> <span>0</span></div>
                    <div className="wrap"><GiTwoCoins /> <span>$0.91</span></div>
                    <span>Reply</span>
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={kesolink} alt="" />
                <div>
                    <h3>Jack Nicholsonc <span>1 day ago</span></h3>
                    <p>I was given birth to in the 20th century so I didn't have the chance or the opportunity to listen to most of the great Bob marley songs</p>
                    <div className="comment-action">
                    <div className="wrap"><BiLike /> <span>244</span></div>
                    <div className="wrap"><BiDislike /> <span>0</span></div>
                    <div className="wrap"><GiTwoCoins /> <span>$0.91</span></div>
                    <span>Reply</span>
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={kesolink} alt="" />
                <div>
                    <h3>Jack Nicholsonc <span>1 day ago</span></h3>
                    <p>I was given birth to in the 20th century so I didn't have the chance or the opportunity to listen to most of the great Bob marley songs</p>
                    <div className="comment-action">
                    <div className="wrap"><BiLike /> <span>244</span></div>
                    <div className="wrap"><BiDislike /> <span>0</span></div>
                    <div className="wrap"><GiTwoCoins /> <span>$0.91</span></div>
                    <span>Reply</span>
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={kesolink} alt="" />
                <div>
                    <h3>Jack Nicholsonc <span>1 day ago</span></h3>
                    <p>I was given birth to in the 20th century so I didn't have the chance or the opportunity to listen to most of the great Bob marley songs</p>
                    <div className="comment-action">
                    <div className="wrap"><BiLike /> <span>244</span></div>
                    <div className="wrap"><BiDislike /> <span>0</span></div>
                    <div className="wrap"><GiTwoCoins /> <span>$0.91</span></div>
                    <span>Reply</span>
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={kesolink} alt="" />
                <div>
                    <h3>Jack Nicholsonc <span>1 day ago</span></h3>
                    <p>I was given birth to in the 20th century so I didn't have the chance or the opportunity to listen to most of the great Bob marley songs</p>
                    <div className="comment-action">
                    <div className="wrap"><BiLike /> <span>244</span></div>
                    <div className="wrap"><BiDislike /> <span>0</span></div>
                    <div className="wrap"><GiTwoCoins /> <span>$0.91</span></div>
                    <span>Reply</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo