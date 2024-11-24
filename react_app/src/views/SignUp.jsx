import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../axios-client'
import { UseStateContext } from '../contexts/ContextsProvider'

export default function SignUp() {
const nameRef                 = useRef()
const emailRef                = useRef()
const passwordRef                  = useRef()
const passwordConfirmationRef = useRef()
const {setUser,setToken} = UseStateContext()

  const onSubmit = (ev)=>{
    ev.preventDefault()
    const payload = {
      name              :   nameRef.current.value                , 
      email            :    emailRef.current.value            ,
      password        :     passwordRef.current.value               ,
      password_confirmation: passwordConfirmationRef.current.value ,
    }
axiosClient.post("/SignUp",payload).then(({data})=>{
  setUser(data.user)
  setToken(data.token)
}
)
  }
  return (
    <div className="login-signup-form animated fadeInDown">
      <div className='form'>
    <form onSubmit={onSubmit}>
      <h1 className='title'>
     Create account
      </h1>
<input ref={nameRef} type='text' placeholder='full name' />
<input ref={emailRef} type='email' placeholder='Email' />
<input ref={passwordRef} type="password"  placeholder='Password'/>
<input ref={passwordConfirmationRef} type="password"  placeholder='Password confirmation'/>
<button className="btn btn-block"> Signup</button>
<p className='message'>
  Already registred? <Link to="/Login"> sign in to your account</Link>

</p>
    </form>
      </div>
      
      </div>
  )
}