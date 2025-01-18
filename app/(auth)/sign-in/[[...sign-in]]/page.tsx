import { SignIn, SignUp } from '@clerk/nextjs'

export default function Page() {
  return( 
    <section className='flex justify-center items-center w-full h-screen'>
   <SignIn signUpForceRedirectUrl="/" />
  
  </section>
  )
}