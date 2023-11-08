'use client'
import {BiSearch} from 'react-icons/bi'
import useSearchModal from '../components/hooks/useSearchModal'

const Search = () => {

  const searchModal = useSearchModal()
  return (
    <div  onClick={searchModal.onOpen} className='border-1[px]  w-full  md:w-auto py-2 rounded-full dark:shadow-gray-800
    shadow-sm hover:shadow-md transition cursor-pointer'>
     <div className="flex flex-row items-center justify-between">
         <div className='text-sm font-semibold px-6'>
              Anywhere
         </div>
         <div className='border-1[px] hidden sm:block text-sm font-semibold px-6 flex-1 text-center'>
              Anyweek
         </div>
         <div className="flex flex-row pl-6 pr-2 text-gray-600 items-center gap-3 text-sm">

            <div className='hidden sm:block'>Add guests</div>
            <div className='p-2 bg-rose-500 rounded-full text-white'>
                <BiSearch size={18} />
            </div>

         </div>
     </div>
    </div>
  )
}

export default Search
