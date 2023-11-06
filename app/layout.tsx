import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mly blog',
  description: 'Mlyblog the best blog for developer and data scientists',
}

export default function RootLayout({
  children,
 
}: {
  children: React.ReactNode
  
}) {
  return (
    <html lang="en">
      <body className={inter.className+ " w-[80%] m-auto"}>
        <header className='flex justify-between py-4'>
          <div className='flex gap-2'>
          <h1>Logo</h1>
           <nav>
             <ul className='flex gap-2'>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/posts">Posts</Link></li>
              
             </ul>
           </nav>
          </div>
          
           <div className='flex gap-2'>
            <p>Search</p>
            <p>Dark mode</p>
           </div>
        </header>
        {children}
        <div>
         
        </div>
      </body>
    </html>
  )
}
