'use client'
import React, { useState } from 'react'

import { Heart } from 'lucide-react';
import Link from 'next/link';

const AddQuantity = () => {

    const[count, setCount] = useState(0);

  return (
    <div className='grid grid-cols-3 gap-5 py-5'>

    <div className='flex flex-row items-center outline outline-gray-300 w-[87px] h-7'>  
    <button   
        onClick={() => setCount(Math.max(count - 1, 0))}   
        className='outline outline-gray-300 h-7 w-5 hover:bg-red-500 hover:text-white px-3'  
    >   
        -   
    </button>   
    <h1 className='mx-7'>{count}</h1>   
    <button   
        onClick={() => setCount(count + 1)}   
        className='outline outline-gray-300 h-7 w-5 hover:bg-red-500 hover:text-white px-3 '  
    >   
        +   
    </button>  
</div>
 <Link href='/checkout'>
 <button className='bg-red-500 text-white rounded-sm text-sm w-20 h-8 ml-3 md:ml-0 md:w-32 hover:animate-pulse'>
  Buy Now</button> </Link>
<h1>
<Heart className="p-2 border rounded-sm hover:bg-red-500 hover:text-white"/></h1>
</div>
  )
}

export default AddQuantity



