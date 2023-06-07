import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'


function MainLayout() {
  return (
    <div style={{display:"flex", width:"95vw"}}>
    <div style={{width:"40%"}}>
        <Sidebar />
    </div>
    <main style={{width:"60%"}}>
        <Outlet />
    </main>
</div>
  )
}

export default MainLayout