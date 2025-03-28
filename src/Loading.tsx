import React from 'react'

export default function Loadingdata() {
  return (
    <div className="h-[80vh] inset-0 flex items-center justify-center bg-[#121824] bg-opacity-80 z-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-solid"></div>
  </div>
  )
}
