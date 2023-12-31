'use client'
import React from 'react'
import Container from './Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
import Categories from './Category/Categories'


const Navbar = ( ) => {

  return (
    <div className='fixed w-full z-10 shadow-sm'>
        <div className='border-b-[1px] dark:border-gray-800  py-4'>
            <Container>
                <div className='
                flex
                flex-row
                items-center
                justify-between
                gap-3
                md:gap-0'
                >
                  <Logo/>
                  <Search/>
                  <UserMenu/>
                </div>
            </Container>
        </div>
        <Categories/>
    </div>
  )
}

export default Navbar
