import React from 'react'
import { Outlet } from 'react-router-dom'
import { UseStateContext } from '../contexts/ContextsProvider'

export default function DefaultLayout() {
const {user,token}= UseStateContext()
  return (
    <div>
        DefaultLayout
    <Outlet/>
    </div>
  )
}
