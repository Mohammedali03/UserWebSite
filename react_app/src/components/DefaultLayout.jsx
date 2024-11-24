import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { UseStateContext } from '../contexts/ContextsProvider'

export default function DefaultLayout() {
const {user,token}= UseStateContext()

if (!token) {
  // return <Navigate to = "/Login"/>
  
}
const onLogout = (ev)=>{
  ev.preventDefault()
}
  return (
    <div id="defaultLayout">
      <aside>
      <Link to= "/dashboard">Dashboard</Link>
      <Link to= "/Users">Users</Link>
      </aside>
       <div className='content'>
        <header>
          <div>
            HEADER
          </div>
          <div>
            {user.name}
            <a href="#"  onClick={onLogout} className='btn-logout'>Logout</a>
          </div>
          
        </header>
        <main>
            <Outlet/>
          </main>
       </div>
    </div>
  )
}
