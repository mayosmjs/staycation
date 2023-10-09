'use client'
import {AiOutlineMenu} from  'react-icons/ai'
import Avatar from './Avatar'
import { useCallback, useState } from 'react'
import MenuItem from './MenuItem'
import useRegisterModal from './hooks/useRegisterModal'
import useLoginModal from './hooks/useLoginModal'
import useRentModal from './hooks/useRentModal'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
// import ThemeBtn from '../Theme/ThemeBtn'




const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();


  const toggleOpen = useCallback(() => {
     setIsOpen((value) => !value);
  });
  const { data: session } = useSession();
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const rentModal = useRentModal()
  

  const onRent = useCallback(() => {
   if (!session?.user) {
     return loginModal.onOpen();
   }

   rentModal.onOpen();
 }, [loginModal, rentModal]);



  return (
    <div className='relative'>
        <div className="flex flex-row items-center gap3">
            <div onClick={onRent} className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full transition cursor-pointer hover:bg-neutral-100">
                  Your home
                 
            </div>
            <div onClick={toggleOpen} className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                 <AiOutlineMenu />
                 <div className="hidden md:block">
                    <Avatar/>
                 </div>
            </div>

            {/* <div className="hidden md:block text-sm font-semibold py-2 px-4 rounded-full border  transition cursor-pointer hover:bg-neutral-100">
                <ThemeBtn/>                 
            </div> */}
        </div>
       
       {isOpen && (
           <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
              <div className="flex flex-col cursor-pointer">

                {session?.user  ? (
                     
                     <>
                <MenuItem 
                  label="My trips" 
                  onClick={() => router.push('/trips')}
                />
                <MenuItem 
                  label="My favorites" 
                  onClick={() => router.push('/favorites')}
                />
                <MenuItem 
                  label="My reservations" 
                  onClick={() => router.push('/reservations')}
                />
                <MenuItem 
                  label="My properties" 
                  onClick={() => router.push('/properties')}
                />
                <MenuItem 
                  label="Airbnb your home" 
                  onClick={rentModal.onOpen}
                />
                <hr />
                <MenuItem 
                  label="Logout" 
                  onClick={() => signOut()}
                />
                     </>

                     ) : (
                    
                     <>
                        <MenuItem onclick={loginModal.onOpen} label='Login'/>
                        <MenuItem onclick={registerModal.onOpen} label='SignUp'/>
                     </>

                ) }
                  
              </div>
           </div>
       )}

    </div>
  )
}

export default UserMenu