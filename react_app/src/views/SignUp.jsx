import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const onSubmit = (ev)=>{
    ev.preventDefault()
  }
  return (
    <div className="login-signup-form animated fadeInDown">
      <div className='form'>
    <form onSubmit={onSubmit}>
      <h1 className='title'>
     Create account
      </h1>
<input type='text' placeholder='full name' />
<input type='email' placeholder='Email' />
<input type="password"  placeholder='Password'/>
<input type="password"  placeholder='Password confirmation'/>
<button className="btn btn-block"> Signup</button>
<p className='message'>
  Already registred? <Link to="/Login"> sign in to your account</Link>

</p>
    </form>
      </div>
      
      </div>
  )
}