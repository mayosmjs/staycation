import Navbar from './components/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import RegisterModal from  './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import SearchModal from './components/modals/SearchModal'

import RentModal from './components/modals/RentModal'
import ToasterProvider from './providers/ToasterProvider'
import Provider from './components/Provider'
import ThemeProvider from './Theme/ThemeProvider'


const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Your staycation online',
  description: 'Your Number one staycation platform in the globe',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
      
      <Provider>
      <ThemeProvider>
        <ToasterProvider/>
        <RegisterModal/>
        <LoginModal/>
        <RentModal/>
        <SearchModal/>
        <Navbar/>
        {children}
        </ThemeProvider>
       </Provider>
      </body>
    </html>
  )
}
