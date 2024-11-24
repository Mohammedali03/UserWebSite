import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UseStateContext } from '../contexts/ContextsProvider'

export default function GuestLayout() {
  const {token}= UseStateContext()
 
  if (token) {
    return <Navigate to = '/'/>
  }
  return (
    <div>GuestLayout
        <Outlet/>
    </div>
  )
}
