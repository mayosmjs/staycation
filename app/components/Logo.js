'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()
  return (
    <Image 
     priority
     onClick={()=>{router.push('/')}}
      alt='logo' src='/images/logo/airbnb.png' className='hidde md:block cursor-pointer'
     height={60} width={60}/>
  )
}

export default Logo