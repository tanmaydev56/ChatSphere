import { OrganizationSwitcher, SignedIn, SignOutButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Topbar = () => {
  return (
    <nav className='topbar '>
     <Link href='/' className='flex items-center gap-4 '>
     <Image 
     src='/assets/logo.webp'
     alt='logo'
     width={38}
     height={38}
     className='object-contain 
     max-xs:hidden
     rounded-full

     '
     />
     <p className='text-heading3-bold text-[#1F2937] max-xs:hidden'>ChatSphere</p>
     </Link>
     <div className='flex items-center gap-1'>
      <div className='block md:hidden'>
        <SignedIn>
          <SignOutButton>
            <div className='flex cursor-pointer'>
              <Image
                src='/assets/logout.svg'
                alt='logout'
                width={24}
                height={24}
                className='object-contain'
              />
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
      {/* <OrganizationSwitcher 
      appearance={{
        
        elements: {
          organizationSwitcherTrigger: 'py-2 px-4'
        }
      }}
      /> */}
     </div>
      
    </nav>
  )
}

export default Topbar
