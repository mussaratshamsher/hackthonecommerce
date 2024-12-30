import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Category() {
  return (
   <div> 
    <div className='bg-red-500 w-5 h-10 rounded md:ml-32 ml-5 mb-3'> 
    <h1 className='md:ml-10 ml-7 text-red-500 mt-7 p-2'> Categories </h1>
  </div>
 <div className='grid grid-cols-1 md:grid-cols-2'>
 <h1 className='lg:text-3xl text-2xl font-bold md:mt-8 md:ml-32 ml-5'>Browse By Category</h1>
 <h1 className='flex md:ml-[450px] ml-24 gap-3 mt-5 mb-10 '>
  <ArrowLeft className='rounded-full w-10 h-10' id='sale'/> 
 <ArrowRight className='rounded-full w-10 h-10' id='sale'/></h1>
</div>
<div className='grid grid-cols-2 md:grid-cols-3 lg:flex ml-3 2xl:gap-40'>
<CategoryCard image="/images/cellphone.png" title='Phones'/>
<CategoryCard image="/images/computer.png" title='Computers'/>
<CategoryCard image="/images/cameraicon.png" title='Cameras'/>
<CategoryCard image="/images/watch.png" title='Watches'/>
<CategoryCard image="/images/headphone.png" title='HeadPhones'/>
<CategoryCard image="/images/gamepad.png" title='Gaming'/>
</div>
    </div>
  )
}
