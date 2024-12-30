
"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';    

export default function Auth(){
 
  const [isLogin, setIsLogin] = useState(true);  

  const toggleForm = () => {  
    setIsLogin((prev) => !prev);  
  };  

  return (  
    <div className='grid grid-cols-1 md:grid-cols-3 py-10 lg:mr-20 2xl:py-20 2xl:mr-96'>

<Image src={'/images/auth.png'} alt='Image.Auth' width={500} height={500} 
className='col-span-2 w-[600px] 2xl:w-[900px]'/> 


    <div className="h-auto " > 
      <div className="p-5 2xl:p-10 bg-transparent">  
        <h2 className="mb-6 text-2xl 2xl:text-4xl font-bold text-center 2xl:p-7">{isLogin ? 'Create an account' : 'Log in to Exclusive'}</h2>  
<p className='font-bold 2xl:mb-10'>Enter your details below</p>

        <form > 

        <div className="mb-4 mt-3 ">  
             <input  type="text"  required className="block w-full px-4 py-3 border" placeholder='Full Name'/>  
          </div>  

          <div className="mb-4 ">   
         <input  type="email"  required className="block w-full px-4 py-3 border" placeholder='Email@exclusive.com'/>  
          </div> 

          <div className="mb-4">   
            <input type="password" required className="block w-full px-4 py-3 border " placeholder='Password'/>  
          </div> 

          <div>
           <input type="checkbox" className='hover:bg-blue-500 hover:text-white 2xl:my-3'/> Remember me?
          </div>

          <button type="submit"  
            className="w-full mt-4 2xl:my-10 text-white border py-2 bg-red-600  
            hover:text-slate-200 hover:bg-red-500 text-[20px]">  
            {isLogin ? 'Create Account' : 'Sign Up'}  
          </button> 
        </form>  
        
        <div className="mb-4 mt-3 border"> <Link href='https://www.google.com.pk/' target='blank'> 
        <button className="flex flex-row w-full border py-4 text-[20px] gap-5 justify-center" >
        <Image src={'/images/google.png'} alt='' width={500} height={500}
        className='w-7 h-7'/> Sign up with Google</button></Link> </div>

          <button onClick={toggleForm}  
          className="mt-4 text-sm hover:underline">  
          {isLogin ? 'Already have an account? Login' : "Don't have an account? Sign Up"}  
        </button>

      </div>  
    </div> 

    </div>
  );  
};  