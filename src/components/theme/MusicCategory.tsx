
import Image from 'next/image'
import React from 'react'
import speaker from '../../../public/images/speaker.png'
import musicicon from '../../../public/images/musicicon.png'



export default function MusicCategory() {
  return (
    <div className='bg-black md:h-[400px] h-auto md:m-10 grid md:grid-cols-2 grid-cols-1 mt-5'>

<div className='md:ml-20 ml-14 2xl:ml-48'>
  <p id='musictxt'><b>Categories</b></p>
<h1 className='md:text-4xl 2xl:text-6xl text-2xl font-bold text-white mt-4'>Enhance Your <br />Music Experience </h1>
<Image src={musicicon} alt='' width={2000} height={2000} className='w-40 h-12 2xl:w-64 2xl:h-20 2xl:mb-2 mb-5 mt-4 ml-4'/>
<button id='musicbtn' className='w-32 md:h-14 h-10 2xl:w-60 border border-green-200 rounded-md mt-4 ml-8 '>Buy Now!</button>
</div>

<div>
    <Image src={speaker} alt='' width={500} height={500} className='hover:animate-pulse'/>
</div>




    </div>
  )
}
