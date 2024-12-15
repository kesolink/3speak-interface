import React from 'react'
import "./Login.scss"
import logo from "../../assets/image/3S_logo.svg"
import keychain from "../../assets/image/keychain.png"
import hivesigner from "../../assets/image/hivesigner.png"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login-container'>
        <div className="container-wrapper">
            <div className="main-login-keywrapper">
                <img src={logo} alt="" />
                <span>Login with your username and private key</span>

                <input type="text" placeholder='Username' />
                <input type="text" placeholder='Posting key' />

                <span>we dont store your private keys.</span>

                <button>Login</button>

                <div className="or-wrap">
                 <div className="or-divider">
                  <span>or</span>
                  </div>
               </div>

              
                <Link to="/keychain" className="wrap">
                    <img src={keychain} alt="" />
                    <span>Login with Keychain</span>
                </Link>
        
                {/* <div className="wrap">
                    <img src={hivesigner} alt="" />
                    <span>Login with hivechain</span>
                </div> */}
                <div className="wrap-signup">
                    <span>Don't have an account?</span><span className='last'>Sign up now!</span>
                </div>
            


            </div>
        </div>

    </div>
  )
}

export default Login