import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
//rfc


export default function Home() {
  return (
    <div className='container'>
      <Announcement />
      <Navbar /> 
      <Slider />
    </div>
  )
}
