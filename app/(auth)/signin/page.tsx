import Link from 'next/link'
import React from 'react'
import LoginForm from '../_components/LoginForm'

const SignIn = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="w-full max-w-100 ">
          <LoginForm/>
        </div>
        <div className="flex gap-1 items-center text-base text-black font-popppins font-light mt-4">
          <p>Already have an account</p>
          <Link
            className="text-lg cursor-pointer text-blue-400"
            href={"/signup"}
          >
            SignUp
          </Link>
        </div>
      </div>
    
    </>
  )
}

export default SignIn