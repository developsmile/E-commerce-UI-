import { Divider } from '@mui/material'
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
const Login = () => {
  return (
      <>
         <div className="login-container">
            <div className="login-form-container">
                <div className="log-title">
                    SIGN IN
                </div>
                <form >
                    <input type="text" name="" id="" placeholder='Enter username' />
                    <input type="password" name="" id="" placeholder='Enter password' />
                    <button> SIGN IN </button>
                    <div className="forgot">forgot Password ?</div>
                </form>
                
                <Divider>
                  OR
                </Divider>
                <div className="social-link">
                    <div className="icon google"> <GoogleIcon/> </div>
                    <div className="icon facebook"> <FacebookIcon/> </div>
                    <div className="icon linkdin"> <LinkedInIcon/> </div>
                </div>
                <div className="new-account">
                  Need an acoount <u>SIGN UP</u>
                </div>
            </div>
        </div>
    
      </>
  )
}

export default Login