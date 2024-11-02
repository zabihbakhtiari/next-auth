import React from 'react'
import Link from 'next/link'
import { AirVent } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className='border-b px-4 py-2 bg-white'>
      <div className='flex items-center justify-between mx-auto max-w-4xl h-16'>
        <Link href="/" className="text-xl font-bold">

         <Link href='/' className='flex items-center gap-2'>
         <AirVent />
         <span className='font-bold'>Nextauth.</span>
         </Link>
        </Link>
        
        <div className="flex gap-4">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}