
"use client"

import React, { useState } from 'react';  

import {  
    Sheet,  
    SheetContent,  
    SheetTrigger,  
} from "@/components/ui/sheet";  
import { Heart, Search, ShoppingCart, SquareMenu, User } from 'lucide-react';  
import Link from 'next/link';  

export default function Header() {  
    const [isDropdownOpen, setDropdownOpen] = useState(false);  

    const toggleDropdown = () => {  
        setDropdownOpen(!isDropdownOpen);  
    };  

    const closeDropdown = () => {  
        setDropdownOpen(false);  
    };  

    return (  
        <div >
{/* title bar  */}
            <div id='banner'>
            <h1 className='w-full bg-black text-white h-10 md:text-1xl  mt-2 p-2 text-xs' id='scrolling-text'>
               Summer Sale For All Swim Suits & Free Express Delivery - OFF 50%! <span className='font-bold underline'>SHOP NOW</span>
            </h1></div>
{/* hero section  */}
            <div className="w-full mt-5 md:h-20 md:flex md: justify-between lg:grid lg:grid-cols-3 lg:p-5 hidden">  
                <h1 className='font-bold lg:text-4xl md:text-1xl'>Exclusive</h1>  

                <ul className="md:flex md:flex-row md:gap-2 lg:gap-5 2xl:gap-10 hidden">  
                    <li className='hover:underline hover:decoration-gray-500'><Link href="/">Home</Link></li> 
                    <li className='hover:underline hover:decoration-gray-500'><Link href="/products">Products</Link></li> 
                    <li className='hover:underline hover:decoration-gray-500'><Link href="/contact">Contact</Link> </li>  
                    <li className='hover:underline hover:decoration-gray-500'><Link href="/about">About</Link></li>  
                    <li className='hover:underline hover:decoration-gray-500'><Link href="/auth">Sign Up</Link></li>  
                </ul>  
                <ul className='flex md:gap-3 gap-1'>  
                    <li>  
                        <Link href="products" className='flex flex-row'>  
                            <input type="text" placeholder='What are you looking for?'   
                                   className='lg:w-60 w-40 h-8 bg-gray-300 rounded p-2 border border-gray-500 hover:border-black'/>  
                            <Search className='-ml-7 -z-0 mt-1'/>  
                        </Link>  
                    </li>  
                    <li><Link href="/checkout"><Heart/></Link></li>  
                    <li><Link href="/cart"><ShoppingCart/></Link></li>  
                    {/* User Dropdown */}  
                    <li className='relative'>  
                        <div onClick={toggleDropdown} className='flex items-center cursor-pointer'>  
                            <User />  
                          
                        </div>  
                        {isDropdownOpen && (  
   <div className="absolute right-0 z-10  text-white text-xs shadow-md rounded mt-2 w-40" id='back'>  
    <ul className="flex flex-col p-3 gap-2">  

     <li className='hover:underline hover:decoration-white'>  
  <Link href="/auth" onClick={closeDropdown}><i className='bx bx-user'></i>Manage My account</Link></li> 

     <li className='hover:underline hover:decoration-white'>
         <Link href="/cart" onClick={closeDropdown}><i className='bx bx-folder-open'></i>My Orders</Link></li> 

      <li className='hover:underline hover:decoration-white'>  
      <Link href="/checkout" onClick={closeDropdown}><i className='bx bx-x-circle'></i>My Cancellations</Link></li> 

      <li className='hover:underline hover:decoration-white '>  
       <Link href="/checkout" onClick={closeDropdown}><i className='bx bx-star'></i> Reviews</Link></li>  

    <li className='hover:underline hover:decoration-white'>  
     <Link href="/auth" onClick={closeDropdown}><i className='bx bx-log-out'></i>Logout</Link> </li>  
                                </ul>  
                            </div>  
                        )}  
                    </li>  
                </ul>  
            </div>  
            <hr className='w-full border-1 border-gray-400 m-auto'/>  

            {/* for Mobile Screen */}  
            <div className='md:hidden'>  
      <div className='w-full h-10 grid grid-cols-2 p-2'>  
       <h1 className='text-1xl font-bold'> Exclusive</h1>  
                    <Sheet>  
                        <SheetTrigger className="hover:text-gray-600 "> <SquareMenu className='ml-28'/></SheetTrigger>  
                        <SheetContent>  
                            <ul className="flex flex-col gap-3">  
                 <li className='hover:underline hover:decoration-gray-500'><Link href="/">Home</Link></li>  
                 <li className='hover:underline hover:decoration-gray-500'><Link href="/products">Products</Link></li>  
                <li className='hover:underline hover:decoration-gray-500'><Link href="/contact">Contact</Link> </li>  
                <li className='hover:underline hover:decoration-gray-500'><Link href="/about">About</Link></li>  
                <li className='hover:underline hover:decoration-gray-500'><Link href="/auth">Sign Up</Link></li>  
                            </ul>  
                        </SheetContent>  
                    </Sheet>  
                    <hr className='w-[300px] border-1 border-gray-400 m-auto'/>  
                </div>  

                <ul className='flex gap-5 mt-5 ml-5'>  
                    <li>  
                        <Link href="products" className='flex flex-row'>  
                            <input type="text" placeholder='Search Item'   
                                   className='w-40 h-8 bg-gray-300 rounded p-1 border border-gray-500 hover:border-black'/>  
                            <Search size={20} strokeWidth={1.25} className='-ml-8 -z-0 mt-1 text-gray-700'/>  
                        </Link>  
                    </li>  
                    <li><Link href="/checkout"><Heart/></Link></li>  
                    <li><Link href="/cart"><ShoppingCart/></Link></li>  
                    <li className='relative'>  
                        <div onClick={toggleDropdown} className='flex items-center cursor-pointer'>  
                         <User />  
                      
                        </div>  
                        {isDropdownOpen && (  
       <div className="absolute right-0 z-10 text-white bg-black text-xs shadow-md rounded mt-2 w-40"  >  
        <ul className="flex flex-col p-2 gap-1"> 

      <li className='hover:underline hover:decoration-white'> 
       <Link href="/auth" onClick={closeDropdown}><i className='bx bx-user'></i>Manage My account</Link></li> 

     <li className='hover:underline hover:decoration-white'>  
    <Link href="/cart" onClick={closeDropdown}><i className='bx bx-folder-open'></i>My Orders</Link></li>  

    <li className='hover:underline hover:decoration-white'>  
    <Link href="/checkout" onClick={closeDropdown}><i className='bx bx-x-circle'></i>My Cancellations</Link></li> 

    <li className='hover:underline hover:decoration-white '>  
  <Link href="/checkout" onClick={closeDropdown}><i className='bx bx-star'></i> Reviews</Link></li> 

<li className='hover:underline hover:decoration-white'>  
 <Link href="/auth" onClick={closeDropdown}><i className='bx bx-log-out'></i>Logout</Link></li>  
                               
                                </ul>  
                            </div>  
                        )}  
                    </li>  
                </ul>  
            </div>  
        </div>  
    );  
}