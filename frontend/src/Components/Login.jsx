import React from 'react'
import logo from '../Images/live-chat_512px.png'
import { Button, TextField } from '@mui/material'

function Login() {
  return (
    <div className='login-container'>
        <div className="image-container">
        <img src = {logo} alt='logo' className='welcome-logo'/>
        </div>
        <div className="login-box">
            <h1 className='login-text'>Login To Your Account</h1>
            <TextField id="standard-basic" label="Enter Username" variant="outlined" />
            <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="outlined">Login</Button>
        </div>
      
    </div>
  )
}

export default Login
