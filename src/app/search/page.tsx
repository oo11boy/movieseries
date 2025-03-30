import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import ListSearch from '@/Components/SearchBox/ListSearch'
import SearchBox from '@/Components/SearchBox/SearchBox'

import React from 'react'

export default function page() {
  return (
    <>
    <Header/>
    <SearchBox/>
    <ListSearch/>
    <Footer/>
    </>
  )
}
