import React from 'react';  
 
import { Eye, Heart } from 'lucide-react';  
import Image from 'next/image';  
import Link from 'next/link';
import { Button } from '@/components/ui/button';
 
const productsData = [  
    {  id: 1, title: 'The North Coat',  
        image: '/images/coat.png', price: 260,  
        originalPrice: 360, discount: 40, rating: 3, 
        fullStars: 4,  halfStars: 0, grayStars: 1,  
    },  
{  id: 2,  title: 'Gucci Duffle Bag',  
        image: '/images/bag.png', price: 960, 
        originalPrice: 1160, discount: 35, rating: 4, 
        fullStars: 3,  halfStars: 0, grayStars: 2,  

    },  
{  id: 3,  title: 'RGB CPU Cooler',  
        image: '/images/cooler.png', price: 960,  
        originalPrice: 1160, discount: 35, rating: 5,  
        fullStars: 5,  halfStars: 0, grayStars: 0,  
    },  
{  id: 4, title: 'Small Bookshelf',  
        image: '/images/table.png', price: 360,  
        fullStars: 4,  halfStars: 0, grayStars: 1,  
        originalPrice: 360, discount: 0, rating: 65,   
    },  
{  id: 5, title: 'Game Pad',  
        image: '/images/fsale1.png', price: 360,  
        originalPrice: 360, discount: 0, rating: 65,
        fullStars: 3,  halfStars: 1, grayStars: 1,  
    },
{  id: 6, title: 'Small Bookshelf',  
        image: '/images/table.png', price: 360,  
        originalPrice: 360, discount: 0, rating: 65,
        fullStars: 4,  halfStars: 0, grayStars: 1,  

    }, 
 {  id: 7, title: "Breed Dry Dog Feed",  
        Origionalprice: 260, image: '/images/dogfeed.png',
        discount: null, rating: 40, price: 200,
        fullStars: 4,  halfStars: 0, grayStars: 1,  
        },  
 {  id: 8, title: "CANON EOS DSLR Camera",  
            Origionalprice: 260, image: '/images/digital.png',
            discount: null, rating: 40, price:400,
            fullStars: 5,  halfStars: 0, grayStars: 0,
            },
 {  id: 9, title: "Gaming Laptop",  price: 200,
                Origionalprice:230, image: '/images/laptop.png',
                discount: null, rating: 100, 
                fullStars: 4,  halfStars: 1, grayStars: 0,
         }, 
 {  id: 10, title: "Face Wash",  
            Origionalprice:230, image: '/images/facewash.png',
            price:200 , discount: 30, rating: 80, 
            fullStars: 4,  halfStars: 0, grayStars: 1,
     },          
 {  id: 11, title: "Racing Shoes",  
        Origionalprice:230, image: '/images/sneakers.png',
        price:200 , discount: 30, rating: 80, 
        fullStars: 5,  halfStars: 0, grayStars: 0,
 }, 
 {  id: 12, title: "Toy Game",  
    Origionalprice:330, image: '/images/toygame.png',
    price:300 , discount: 30, rating: 80, 
    fullStars: 3,  halfStars: 1, grayStars: 1,
}, 
{  id: 13, title: "Jacket",  
    Origionalprice:500, image: '/images/jacket.png',
    price:450 , discount: 50, rating: 80, 
    fullStars: 4,  halfStars: 1, grayStars: 0,
}, 
{  id: 14, title: "Face Wash",  price: 200, discount: null,
    Origionalprice:400, image: '/images/facewash.png', rating: 100, 
    fullStars: 3,  halfStars: 1, grayStars: 1,
},     
{  id: 15, title: "KeyBoard",  price: 200, discount: null,
    Origionalprice:400, image: '/images/fsale2.png', rating: 100,
    fullStars: 4,  halfStars: 1, grayStars: 0, 
},     
{  id: 16, title: "Gaaming LCD Moniter", price: 200, 
    Origionalprice:400, image: '/images/fsale3.png', rating: 100,  
    fullStars: 3,  halfStars: 2, grayStars: 0,
},     

];  

export default function Products() {  
    return (  
        <div className='w-full'>  
            <div className='grid grid-cols-1 md:grid-cols-2'>  
                <h1 className='md:text-3xl text-2xl font-bold md:mt-8 md:ml-32 ml-5'>See Our Products</h1>  
                <Button variant={'ghost'}>  
                    <Link href='/'>View All</Link>  
                </Button>  
            </div>  

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:ml-20 m-auto mt-5 p-4'>  
                {productsData.map((product) => (  
                    <div key={product.id}>  
                        <Link href={`/productsdetail/${product.id}`}>  
                            <div className='w-[220px] h-auto md:mt-10 ml-10 '>  
         <div className='w-[220px] h-[200px]' id='sale'>  
        <div className='grid grid-cols-2'>  
   <h1 className='w-10 h-6 ml-2 mt-3 bg-red-600 text-white rounded'>-{product.discount}%</h1>  
     <Heart className='bg-white w-5 h-5 rounded-full ml-20 mt-3 text-[20px]' />  
      </div>  
   <Eye className='bg-white w-5 h-5 rounded-full ml-48'/>  
   
  <Image src={product.image} alt={product.title} width={100} height={100}  
 className='transition-all hover:scale-125 hover:ease-linear w-24 h-24 ml-14 ' /> 

  <div className='text-center' id='cart'>Add to cart</div>  
   </div>  
   <h1 className='bold mt-5'>{product.title}</h1>  
   <h1 className='text-red-600 flex'>${product.price}  
    <span className='text-gray-400 line-through ml-2'>  
    ${product.originalPrice}</span></h1>  


    <h1 className='text-yellow-500 flex'>  
      {/* Render Stars */}  
      {[...Array(product.fullStars)].map((_, index) => (  
      <i key={`full-${index}`} className='bx bxs-star text-yellow-500'></i>  
       ))}  
     {[...Array(product.halfStars)].map((_, index) => (  
     <i key={`half-${index}`} className='bx bxs-star-half text-yellow-500'></i>  
     ))}  
     {[...Array(product.grayStars)].map((_, index) => (  
    <i key={`gray-${index}`} className='bx bxs-star text-gray-400'></i>  
     ))}  
    <span className='text-gray-400'>({product.rating})</span>  
     </h1>  
     </div>  
        </Link>  
        
        </div>  
         ))}  
      </div>  
    </div>  
    );  
}