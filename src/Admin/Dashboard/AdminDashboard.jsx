import React from 'react'
import Sidebar from '../../Components/AdminDashboard/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <div className='flex'>
            <Sidebar/>
            <div className='w-full'>
              <Outlet/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
