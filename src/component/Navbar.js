import React from 'react'
import './Navbar.css'
import Logo from '../images/Logo.png'
import SearchIcon from '../images/Icon (2).png'
import ToggleBtn from '../images/Icon (1).png'

const Navbar = () => {
  return (
    <div className='FirstPageNavbar'>
      <div className='container d-flex'>
        <div className='col-3' >
          <img src={Logo} alt='' />
        </div>

        <div className='col-5 flex border-2 rounded-md'>
          <input className='w-full p-3 rounded-md bg-transparent border-0' placeholder='What do you want to watch?' />
          <div className='p-3'>
            <img src={SearchIcon} alt='' className='SearchIcon w-6 pt-1' />
          </div>
        </div>

        <div className='col-3 flex justify-end space-x-10'>
          <h1 className='font-bold text-xl py-3'>Sign in</h1>
          <div className='rounded-circle px-3 py-4 bg-rose-700'>
            <img src={ToggleBtn} alt='' className='h-4' />
          </div>
        </div>
      </div>

      <div className=' headerBar container row mx-auto'>
        <div className='col-4'>
          <h1 className=''>John Wick 3 : Parabellum</h1>
          <p className=''>
            John Wick is on the run after killing
             a member of the international 
             assassins' guild, and with a $14 
             million price tag on his head, he is 
             the target of hit men and women everywhere.
          </p>
        </div>
        <div className='col-8 d-none'>Hieoiwdsnk</div>
      </div>
    </div>
  )
}
export default Navbar
