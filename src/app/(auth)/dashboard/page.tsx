import UserDashboardContainer from '@/AuthComponents/UserDashboard/UserDashboardContainer'
import Footer from '@/Components/Footer/Footer'
import HeaderContainer from '@/Components/Header/HeaderContainer'
import React from 'react'

export default function page() {
  return (
    <div>
        <HeaderContainer/>
        <UserDashboardContainer/>
        <Footer/>
    </div>
  )
}
