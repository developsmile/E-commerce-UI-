import { Button } from '@mui/material';
import React from 'react'
import '../css/Register.css';
const Register = () => {
  return (
    <>
        <div className="register-container">
            <div className="form-container">
                <div className="reg-title">
                    CREATE AN ACCOUNT
                </div>
                <form action="">
                    <input type="text" name="" id="" placeholder='Enter first name' />
                    <input type="text" name="" id="" placeholder='Enter last name' />
                    <input type="text" name="" id="" placeholder='Enter username' />
                    <input type="email" name="" id="" placeholder='Enter email' />
                    <input type="password" name="" id="" placeholder='Enter password' />
                    <input type="password" name="" id="" placeholder='Enter confirm password' />
                    <div className="agreement">
                        By Createing an account ,I consent to be processing of my personal data 
                        in accordance with the <b>PRIVACY POLICY</b>
                    </div>
                    <button> Create </button>
                </form>
            </div>
        </div>
    
    
    </>
  )
}

export default Register