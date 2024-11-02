import React from 'react'
import Link from 'next/link'
import { AirVent } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"  // Fixed the syntax

export default function Navbar() {
  return (
    <nav className='border-b px-4 py-2 bg-white'>
      <div className='flex items-center justify-between mx-auto max-w-4xl h-16'>
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <AirVent className="h-6 w-6" />
          Nextauth.
        </Link>
        
        <div className="flex gap-4 items-center">
          <Link 
            href="/" 
            className="hover:text-blue-600"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="hover:text-blue-600"
          >
            About
          </Link>
          <Link 
            href="/sign-in"
            className={buttonVariants({ variant: "outline" })}
          >
            Sign in
          </Link>
          <Link 
            href="/sign-up"
            className={buttonVariants({ variant: "default" })}
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  )
}