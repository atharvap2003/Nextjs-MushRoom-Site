import './globals.css'
import { Inter } from 'next/font/google'

import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hillrise Mushrooms',
  description: 'Quality Product for healthy future',
}

import { SearchContextProvider } from './context/search';



//search context provider
export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
    </SearchContextProvider>
    
  )
}
