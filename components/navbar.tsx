import React from 'react'
import Link from 'next/link'
import { AirVent } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className='border-b px-6 py-2 bg-white'>
      <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
        <div className="flex items-center gap-2">
          <AirVent className="h-6 w-6" />
          <span className="text-xl font-bold">Nextauth.</span>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex gap-8 mr-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              href="/sign-in"
              className="text-gray-600 hover:text-gray-900"
            >
              Sign in
            </Link>
            <Link 
              href="/register"
              className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}