import Navbar from './components/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import RegisterModal from  './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import SearchModal from './components/modals/SearchModal'

import RentModal from './components/modals/RentModal'
import ToasterProvider from './providers/ToasterProvider'
import Provider from './components/Provider'
import ThemeProviders from './Theme/ThemeProvider'
import { Suspense } from 'react'



const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Your staycation online',
  description: 'Your Number one staycation platform in the globe',
}

function SearchBarFallback() {
  return <>placeholder</>
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
            {/* <ThemeProviders> */}
      <body className={nunito.className}>
      <Provider>
        <ToasterProvider/>
        <RegisterModal/>
        <LoginModal/>
        <RentModal/>
        <Suspense fallback={<SearchBarFallback />}>
           <SearchModal/>
        </Suspense>
        <Navbar/>
        {children}
       </Provider>
      </body>
      {/* </ThemeProviders> */}

    </html>
  )
}
