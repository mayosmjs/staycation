'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()
  return (
    <Image 
     onClick={()=>{router.push('/')}}
      alt='logo' src='/images/logo/airbnb.png' className='hidden md:block cursor-pointer'
     height={80} width={80}/>
  )
}

export default Logo