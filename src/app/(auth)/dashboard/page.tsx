import UserDashboard from '@/AuthComponents/UserDashboard/UserDashboard'
import Header from '@/Components/Header/Header'
import React from 'react'

export default function page() {
  return (
    <div>
        <Header/>
        <UserDashboard/>
    </div>
  )
}
