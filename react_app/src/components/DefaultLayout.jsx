import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UseStateContext } from '../contexts/ContextsProvider'

export default function DefaultLayout() {
const {user,token}= UseStateContext()

if (!token) {
  return <Navigate to = "/Login"/>
  
}
  return (
    <div>
        DefaultLayout
    <Outlet/>
    </div>
  )
}
