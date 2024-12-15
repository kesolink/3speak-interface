import React from 'react'
import "./KeyChainLogin.scss"
import logo from "../../assets/image/3S_logo.svg"
import keychain from "../../assets/image/keychain.png"
import hivesigner from "../../assets/image/hivesigner.png"

function KeyChainLogin() {
  return (
    <div className='login-container'>
    <div className="container-wrapper">
        <div className="main-login-keywrapper">
            <img src={logo} alt="" />
            <span>Login with your username </span>

            <input type="text" placeholder='Username' />
           

            <div className="wrap keychain-down">
                <img src={keychain} alt="" />
                <span>Login with Keychain</span>
            </div>

            <div className="wrap-signup keychain-space">
                <span>Don't have an account?</span><span className='last'>Sign up now!</span>
            </div>
        


        </div>
    </div>

</div>
  )
}

export default KeyChainLogin